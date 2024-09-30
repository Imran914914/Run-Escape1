import React, { useState, useRef } from 'react';
import leftLogo from "../assets/left.svg";
import centerLogo from "../assets/centre.svg";
import rightLogo from "../assets/right.svg";

const Code = ({emailValue}) => {
  const redBox = useRef(null)
  const redText = useRef(null)
  const [code, setCode] = useState('')

  const handleClick = () => {
    if(redBox.current&&redText.current){
      redBox.current.style.border = '1px solid rgba(233,77,105,1)'
      redText.current.style.color = 'rgba(233,77,105,1)'
    }
  }
  
  const onChange = (e)=>{
    setCode(e.target.value)
  }

  return (
    <div className="w-full min-h-screen py-10 items-center flex justify-center">
      <div className="bg-[#0f1722] w-1/3 rounded-md min-h-1/2 items-center pt-10 pb-12 px-12">
        <div className="w-ful flex justify-center flex-col gap-1">
          <p className="text-white flex gap-1 justify-center text-sm">
            Back to {" "}
            <a href="/" className="text-blue-500">
              Login
            </a>
          </p>
          <div className="line mt-2 mr-2"></div>
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
          <div>
          <p className="text-white flex justify-center text-sm mt-6">
            Please enter the code sent to
          </p>
          <div className='text-white'>
            <span className='font-bold v-fit mr-1'>
              {emailValue}
            </span>
              <span className='text-sm'>
                or Authenticator code to continue
              </span>
          </div>
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
        {/* {error && <p className="my-1 text-xs text-[#e94d69]">{error}</p>} */}
        <button
          onClick={() => {
            handleClick();
          }}
          className="bg-[#0c8ae6] w-full h-12 tsxt-sm rounded-md mt-5"
        >
          <p className="text-sm">Continue</p>
        </button>
        <div className='text-center mt-4 text-sm'>
          <a href="/" className='text-blue-500'>Get help</a>
        </div>
      </div>
    </div>
  );
};

export default Code;