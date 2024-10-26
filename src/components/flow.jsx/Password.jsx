import React, { useState, useRef } from "react";
import "../styles/Password.css";
import leftLogo from "../assets/left.svg";
import centerLogo from "../assets/centre.svg";
import rightLogo from "../assets/right.svg";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Password = ({ email, password, setPassword }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const redBox = useRef(null);
  const redText = useRef(null);
  const navigate = useNavigate();
  const goToCode = () => navigate("/code");
  const onSubmitPassword = async () => {
    // Password validation
    setLoading(!loading);
    if (password.length < 6 ) {//|| !/[A-Z]/.test(password)
      setError(
        "Password must be 6 characters long"
      );
      setLoading(false);
      redBox.current.style.border = '1px solid rgba(233,77,105,1)'
      redText.current.style.color = 'rgba(233,77,105,1)'
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/dashboard/set-acc-pass",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }), // Send email and password to the API
        }
      );

      if (response.ok) {
        // const result = await response.json();
        // console.log(result);
        goToCode();
      } else {
        const errorResponse = await response.json();
        setLoading(false);
        setError(errorResponse.error || "Failed to set password");
        redBox.current.style.border = '1px solid rgba(233,77,105,1)'
        redText.current.style.color = 'rgba(233,77,105,1)'
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("An error occurred while calling the API");
        redBox.current.style.border = '1px solid rgba(233,77,105,1)'
        redText.current.style.color = 'rgba(233,77,105,1)'
    }
  };

  const goToVerify = () => navigate("/verify");
  const onsubmit = () => {
    if (password?.length < 8 || !/[A-Z]/.test(password)) {
      setError("Invalid: Min 8 chars, 1 capital.");
    } else {
      goToVerify();
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-[#0f1722] sm:w-[470px] h-[600px] 3xl:h-[650px] 3xl:w-[490px] 4xl:h-[700px] 4xl:w-[500px] w-full sm:rounded-md items-center pt-10 sm:px-10 px-5">
        <div className="w-ful h-10 flex justify-center flex-col gap-1">
          <p className="text-white flex gap-1 justify-center text-sm">
            Back to{" "}
            <a href="/" className="text-blue-500">
              Log In
            </a>
          </p>
          <div className="line mt-2 mr-2"></div>
        </div>
        <div className="w-full flex justify-center items-start mt-6 gap-4 text-black">
          <span className="w-8 h-8 mt-2">
            <img src={leftLogo} alt="" />
          </span>
          <span className="">
            <img src={centerLogo} alt="picture" />
          </span>
          <span className="w-8 h-8 mt-1">
            <img src={rightLogo} alt="picture" />
          </span>
        </div>
        <div className="flex mt-5 w-full flex-col text-center">
          <p className="text-white text-3xl flex justify-center w-full">
            Log in
          </p>
          <p className="text-white text-sm flex justify-center mt-6">
            Enter your password to continue.
          </p>
        </div>

        <div className="relative mt-5">
          <input
            ref={redBox}
            type={passwordVisible ? "text" : "password"}
            value={password}
            autoComplete="off"
            id="floating_outlined"
            className="block px-5 pt-4 h-12 w-full text-sm dark:bg-transparent rounded-md border-1 appearance-none text-white dark:border-gray-600 border-y border-x border-slate-500 focus:border-0 hover:border-slate-500 dark:focus:border-blue-500 focus:outline-dashed outline-white outline-offset-4 focus:ring-1 focus:border-blue-600 peer autofill:bg-transparent"
            placeholder=" "
            onChange={(e) => setPassword(e.target.value)}
          />

          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-[#9b9ba2] dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white dark:bg-[#0f1722] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-[#9b9ba2] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            <span className="text-base pl-3.5" ref={redText}>
              Password
            </span>
          </label>
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon
              className="text-white"
              icon={passwordVisible ? faEyeSlash : faEye}
            />
          </span>
        </div>
        {error && <p className="my-1 text-xs text-[#e94d69] pl-1">{error}</p>}
        <button
          disabled={loading}
          onClick={() => {
            onSubmitPassword();
          }}
          className="bg-[#0c8ae6] w-full h-12 tsxt-sm rounded-md mt-5 flex justify-center items-center"
        >
          {loading ? (
            <FaSpinner className="text-white spinner-border spinner-border-sm" />
          ) : (
            <p className="text-sm">Continue</p>
          )}
        </button>
        <p
          className="flex justify-center cursor-pointer mt-8 text-blue-400 text-sm hover:underline"
        >
          Forgot password?
        </p>
      </div>
    </div>
  );
};

export default Password;
