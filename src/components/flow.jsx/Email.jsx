import React, { useRef, useState } from "react";
import leftLogo from "../assets/left.svg";
import centerLogo from "../assets/centre.svg";
import rightLogo from "../assets/right.svg";
import stream from "../assets/stream.svg";
import { FaApple, FaSpinner } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import ReCAPTCHA from 'react-google-recaptcha';

// const RECAPTCHA_SITE_KEY = '6Lc4BGEqAAAAAEsXbhnCtpi4I5GjOsnSTU7bLv4O'; 


const Email = ({ email, setEmail, userId}) => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const redBox = useRef(null);
  const redText = useRef(null);
  const navigate = useNavigate();
  const goToPassword = () => navigate(`/password/?userId=${userId}`);
  const goToUsername = () => navigate(`/username/?userId=${userId}`);
  // const [captchaValue, setCaptchaValue] = useState(null);
  console.log("userId:  ",userId)
  // const onRecaptchaChange = (value) => {
  //   console.log('Captcha value:', value);
  //   setCaptchaValue(value);
  //   setError("")
  // };
  const onSubmit = async (data) => {
    setLoading(true);
  
    // Email Validation
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      redBox.current.style.border = '1px solid rgba(233,77,105,1)';
      redText.current.style.color = 'rgba(233,77,105,1)';
      return; // Exit if email is invalid
    }
  
    const accountId = localStorage.getItem('accountId'); // Retrieve accountId from localStorage if exists
    console.log("Current accountId:", accountId);
  
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/dashboard/set-acc-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, userId, accountId }),
      });
  
      const responseData = await response.json();
      console.log("API response data:", responseData);
      if (response.ok) {
        // Store account details in localStorage
        localStorage.setItem('tempAccount', JSON.stringify(responseData.account));
        console.log('Account stored in localStorage:', responseData.account);
  
        // If no previous accountId or a new account was created, set the new accountId
        if (!accountId || responseData.account._id !== accountId) {
          localStorage.setItem('accountId', responseData?.account._id);
        }
  
        // Proceed to the next step (e.g., go to password setup)
        goToPassword();
      } else {
        setError(responseData.message || "Failed to create or update account");
        redBox.current.style.border = "1px solid rgba(233,77,105,1)";
        redText.current.style.color = "rgba(233,77,105,1)";
      }
    } catch (error) {
      console.error("Error occurred during API call:", error);
      setError("An error occurred while calling the API");
      redBox.current.style.border = '1px solid rgba(233,77,105,1)';
      redText.current.style.color = 'rgba(233,77,105,1)';
    } finally {
      setLoading(false); // Reset loading state in all cases
    }
  };
  
  
  const onChange = (e) => {
    // if (!emailRegex.test(email)) {
    //   setError("Invalid email format");
    // } else {
    //   setError("");
    // }
    setEmail(e.target.value);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-[#0f1722] container sm:w-[520px] h-[670px] 3xl:h-[640px] 3xl:w-[520px]  w-full sm:rounded-lg items-center pt-8 sm:px-12 px-5">
      <div className="w-ful h-10 flex justify-center flex-col gap-1">
          <p className="text-white flex gap-1 justify-center text-md">
            New here?{" "}
            <p className="text-blue-400 cursor-pointer hover:underline">
            Create an account
            </p>
          </p>
          <div className="line mt-2 mr-2"></div>
        </div>
        <div className="md:max-w-full flex justify-center items-start mt-10 gap-5 text-black">
          <span className="w-8 h-8 mt-2">
            <img src={leftLogo} alt="" />
          </span>
          <span className="w-12 h-12 ml-2">
            <img src={centerLogo} alt="picture" />
          </span>
          <span className="w-8 h-8 mt-1">
            <img src={rightLogo} alt="picture" />
          </span>
        </div>
        <div className="flex mt-5 w-full flex-col text-center">
          <p className="text-white md:text-3xl text-lg flex justify-center w-full">
            Log in
          </p>
          <p className="text-white md:text-sm font-medium flex justify-center mt-6">
            Log in using your email address.
          </p>
        </div>
        {/* <div className='w-full mt-5 relative'>
            <input type="text" className='w-full h-12 block appearance-none text-white pl-3 focus:outline-dashed outline-offset-4 outline-white focus: focus:ring-1 :ring-blue-600 rounded-md bg-transparent focus:float-end border-y border-x border-slate-500 focus:border-0 hover:border-slate-400' id='emailInput' placeholder='' required/>
            <label htmlFor="emailInput" className='text-[#9b9ba2] absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto '>Email</label>
        </div> */}
        <div className="relative mt-5">
          <input
            ref={redBox}
            value={email}
            onChange={(e) => onChange(e)}
            type="text"
            id="floating_outlined"
            className="block px-5 pt-4 h-14 w-full text-md dark:bg-transparent rounded-md border-1 appearance-none text-white dark:border-gray-600 border-y border-x border-slate-500 focus:border-0 hover:border-slate-500 dark:focus:border-blue-500 focus:outline-dashed outline-white outline-offset-4 focus:ring-1 focus:border-blue-600 peer autofill:bg-transparent"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-[#9b9ba2] dark:text-gray-400 duration-200 transform -translate-y-6 scale-75 top-5 origin-[0] dark:bg-transparent px-5 peer-focus:px-5 peer-focus:text-blue-600 peer-focus:dark:text-[#9b9ba2] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-2/4 rtl:peer-focus:left-auto start-1 autofill:bg-transparent"
          >
            <span className="text-base" ref={redText}>
              Email
            </span>
          </label>
        </div>
        {error && <p className="my-1 text-xs text-[#e94d69] pl-1">{error}</p>}
        {/* <ReCAPTCHA
          className="mt-2"
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={onRecaptchaChange}
          theme="dark"
        />     */}
        <button
          disabled={loading}
          onClick={() => {
            onSubmit();
          }}
          className="bg-[#0c8ae6] w-full h-14 tsxt-sm rounded-md mt-5 flex justify-center items-center"
        >
          {loading ? (
            <FaSpinner className="text-white spinner-border spinner-border-sm" />
          ) : (
            <p className="text-sm">Continue</p>
          )}
        </button>
        <p className="text-white text-center mt-8 mb-6 text-sm">
          Or log in with
        </p>
        <div  className="flex gap-4 justify-center items-center mb-3">
          <button disabled className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
            <FaGoogle size={23} className="text-white" />
          </button>
          <button disabled className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
            <FaApple size={28} className="text-white" />
          </button>
          <button disabled className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
            <img src={stream} alt="picture" className="h-8 w-6 shrink-0" />
          </button>
          <button disabled className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
            <FaFacebook size={27} className="text-white" />
          </button>
        </div>
        <p className="text-center text-sm mt-5">
          <p onClick={goToUsername} className="text-blue-500 cursor-pointer">
            Log in with RuneScape username
          </p>
        </p>
        <p className="text-center mt-3 text-sm">
          <p className="text-blue-500 cursor-pointer">
            Can't log in?
          </p>
        </p>
      </div>
    </div>
  );
};

export default Email;
