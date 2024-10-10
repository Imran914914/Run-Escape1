import React, { useRef, useState } from "react";
import leftLogo from "../assets/left.svg";
import centerLogo from "../assets/centre.svg";
import rightLogo from "../assets/right.svg";
import stream from "../assets/stream.svg"
import { FaApple, FaSpinner } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Email = ({ email, setEmail}) => {

  // const [error, setError] = useState("");
  // const navigate = useNavigate();
  // const goToCode = navigate("/code")
  // const redBox = useRef(null)
  // const redText = useRef(null)
  // const onSubmit = async () => {
  //   // Email validation regex
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegex.test(email)) {
  //     setError("Please enter a valid email");
  //   } else {
  //     setError("");
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/dashboard/generate-acc-otp",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           //also need to send the userId in here
  //           body: JSON.stringify({ email, userId: "66e42cf092f68c35bbf4bba1" }), // Send the email to the API
  //         }
  //       );

  //       if (response.ok) {
  //         const result = await response.json();
  //         console.log(result);
  //         goToCode();
  //         // setToggle(!toggle); // Toggle if the request was successful
  //       } else {
  //         const errorResponse = await response.json();
  //         setError(errorResponse.error || "Failed to generate OTP");
  //       }
  //     } catch (error) {
  //       setError("An error occurred while calling the API");
  //     }
  //   }
  // };

  // const handleClick = () => {
  //   if(redBox.current&&redText.current){
  //     redBox.current.style.border = '1px solid rgba(233,77,105,1)'
  //     redText.current.style.color = 'rgba(233,77,105,1)'
  //   }
  // }

  // const onChange = (e) => {
  //   // if (!emailRegex.test(email)) {
  //   //   setError("Invalid email format");
  //   // } else {
  //   //   setError("");
  //   // }
  //   setEmail(e.target.value);
  // };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const redBox = useRef(null)
  const redText = useRef(null)
  const navigate = useNavigate();
  const goToPassword = () => navigate('/password');

  const onSubmit = async (data) => {
    setLoading(!loading);
    if (!emailRegex.test(email)) {
      setError("Please Enter valid email address");
      setLoading(false);
      redBox.current.style.border = '1px solid rgba(233,77,105,1)'
      redText.current.style.color = 'rgba(233,77,105,1)'
    } else {
      setError("");
          try {
        const response = await fetch(
          "http://localhost:8080/dashboard/generate-acc-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            //also need to send the userId in here
            body: JSON.stringify({ email, userId: "66e42cf092f68c35bbf4bba1" }), // Send the email to the API
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log(result);
          goToPassword();
          // setToggle(!toggle); // Toggle if the request was successful
        } else {
          const errorResponse = await response.json();
          setError(errorResponse.error || "Failed to generate OTP");
          setLoading(false);
          redBox.current.style.border = '1px solid rgba(233,77,105,1)'
          redText.current.style.color = 'rgba(233,77,105,1)'
        }
      } catch (error) {
        setError("An error occurred while calling the API");
        setLoading(false);
        redBox.current.style.border = '1px solid rgba(233,77,105,1)'
        redText.current.style.color = 'rgba(233,77,105,1)'
      }

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
    <div className="w-full min-h-screen py-10 items-center flex justify-center">
      <div className="bg-[#0f1722] md:w-96 w-96  rounded-md min-h-1/2 items-center pt-10 pb-12 px-12">
        {/* <div className="w-ful flex justify-center flex-col gap-1">
          <p className="text-white flex gap-1 justify-center text-sm">
            New Here?{" "}
            <a href="/" className="text-blue-500">
              Create an account
            </a>
          </p>
          <div className="line mt-2 mr-2"></div>
        </div> */}
        <div className="md:max-w-full flex justify-center items-start mt-6 gap-4 text-black">
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
          <p className="text-white md:text-sm flex justify-center mt-6">
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
            autoComplete="off"
            id="floating_outlined"
            className="block px-5 pt-5 h-12 w-full text-sm dark:bg-transparent rounded-md border-1 appearance-none text-white dark:border-gray-600 border-y border-x border-slate-500 focus:border-0 hover:border-slate-500 dark:focus:border-blue-500 focus:outline-dashed outline-white outline-offset-4 focus:ring-1 focus:border-blue-600 peer autofill:bg-transparent"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-[#9b9ba2] dark:text-gray-400 duration-200 transform -translate-y-6 scale-75 top-5 origin-[0] dark:bg-transparent px-5 peer-focus:px-5 peer-focus:text-blue-600 peer-focus:dark:text-[#9b9ba2] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-2/4 rtl:peer-focus:left-auto start-1 autofill:bg-transparent"
          >
            <span className="text-base" ref={redText}>Email</span>
          </label>
        </div>
        {error && <p className="my-1 text-xs text-[#e94d69]">{error}</p>}
        <button
          disabled={loading}
          onClick={() => {
            onSubmit();
          }}
          className="bg-[#0c8ae6] w-full h-12 tsxt-sm rounded-md mt-5 flex justify-center items-center"
        >
          {loading?<FaSpinner className="text-white spinner-border spinner-border-sm"/>:<p className="text-sm">Continue</p>}
        </button>
        <p className="text-white text-center mt-8 mb-6 text-sm">Or log in with</p>
        <div className="flex gap-4 justify-center items-center mb-3">
          <span className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
            <FaGoogle size={23} className="text-white"/>
          </span>
          <span className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
            <FaApple size={28} className="text-white"/>
          </span>
          <span className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
          <img src={stream} alt="picture" className="h-8 w-6 shrink-0"/>
          </span>
          <span className="bg-[#212737] flex justify-center items-center h-12 w-12 rounded-md">
            <FaFacebook size={27} className="text-white"/>
          </span>
        </div>
        <p className="text-center text-sm mt-5"><a href="/" className="text-blue-500">Log in with Run escape username</a></p>
        <p className="text-center mt-3 text-sm"><a href="/" className="text-blue-500">Can't log in?</a></p>
      </div>
    </div>
  );
};

export default Email;