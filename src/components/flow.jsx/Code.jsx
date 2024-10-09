import React, { useState, useRef } from 'react';
import leftLogo from "../assets/left.svg";
import centerLogo from "../assets/centre.svg";
import rightLogo from "../assets/right.svg";

const Email = ({ emailValaue }) => {
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
          <p className="text-white md:text-3xl text-xl flex justify-center w-full">
          Weve emailed you a verification code
          </p>
          <p className="text-white text-3xl flex justify-center w-full">
            verification code
          </p>
        </div>
        <div>
          <div className="flex justify-center mt-5">
            <p className="text-white">
              Please enter the code sent to <b>{emailValaue}</b> to continue
            </p>
          </div>
        </div>
        {/* <div className='w-full mt-5 relative'>
            <input type="text" className='w-full h-12 block appearance-none text-white pl-3 focus:outline-dashed outline-offset-4 outline-white focus: focus:ring-1 :ring-blue-600 rounded-md bg-transparent focus:float-end border-y border-x border-slate-500 focus:border-0 hover:border-slate-400' id='emailInput' placeholder='' required/>
            <label htmlFor="emailInput" className='text-[#9b9ba2] absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto '>Email</label>
        </div> */}
        <div className="relative mt-5">
          <input
            ref={redBox}
            value={code}
            autoComplete="off"
            onChange={(e) => onChange(e)}
            type="text"
            id="floating_outlined"
            className="block px-5 pt-5 h-12 w-full text-sm bg-transparent rounded-md border-1 appearance-none text-white dark:border-gray-600 border-y border-x border-slate-500 focus:border-0 hover:border-slate-500 dark:focus:border-blue-500 focus:outline-dashed outline-white outline-offset-4 focus:ring-1 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined"
            className="absolute text-sm text-[#9b9ba2] dark:text-gray-400 duration-200 transform -translate-y-6 scale-75 top-5 z-10 origin-[0] dark:bg-transparent px-5 peer-focus:px-5 peer-focus:text-blue-600 peer-focus:dark:text-[#9b9ba2] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-2/4 rtl:peer-focus:left-auto start-1"
          >
            <span className="text-base" ref={redText}>Verification code</span>
          </label>
        </div>
        <button className="bg-[#0c8ae6] w-full h-12 rounded-md text-sm mt-5">
          Continue
        </button>
        <div className='text-center mt-4 text-sm'>
          <a href="/" className='text-blue-500'>Get help</a>
        </div>
      </div>
    </div>
  );
};

export default Email;
