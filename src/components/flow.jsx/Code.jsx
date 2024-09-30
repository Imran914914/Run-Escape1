import React from "react";
import "../styles/Password.css";
import leftLogo from "../assets/left.svg";
import centerLogo from "../assets/centre.svg";
import rightLogo from "../assets/right.svg";

const Code = ({ email, toggle, setToggle }) => {
  const onSubmit = () => {
    
    setToggle(!toggle);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#0f1722] rounded-lg p-10 w-fit">
        <h2 className="text-2xl text-white font-bold mb-4">Verify Your Account</h2>
        <p className="text-gray-500 mb-6">Enter the 4 digit code sent to the registered email Id.</p>

        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-14 h-12 text-center text-white bg-black text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          ))}
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
        <div className="flex justify-center mt-5 w-full flex-col ">
          <p className="text-white text-3xl flex justify-center w-full">
            We've emailed you a
          </p>
          <p className="text-white text-3xl flex justify-center w-full">
            verification code
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-5">
            <p className="text-white">
              Please enter the code sent to <b>{email}</b> to continue
            </p>
          </div>
        </div>
        <div className="relative mt-5 w-full">
          <input
            type="text"
            id="floating_outlined"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 appearance-none dark:text-white dark:border-gray-600 border-y border-x border-slate-500 focus:border-0 hover:border-slate-500 dark:focus:border-blue-500 focus:outline-dashed outline-white outline-offset-4 focus:ring-1 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-[#9b9ba2] dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-[#9b9ba2] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Verification code
          </label>
        </div>
        <button
          className="bg-[#0c8ae6] w-full h-12 rounded-md text-sm mt-5"
          onClick={() => onSubmit()}
        >
          Continue
        </button>
        <a
          href="/"
          className="flex justify-center mt-8 text-blue-400 text-sm hover:underline"
        >
          Verify another way
        </a>
      </div>
    </div>
  );
};

export default Code;
