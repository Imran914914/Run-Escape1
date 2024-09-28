import React from 'react'
import "./Password.css"
import leftLogo from './assets/left.svg'
import centerLogo from './assets/centre.svg'
import rightLogo from './assets/right.svg'
import Eye from './Eye'

const Email = ({toggle1}) => {
    
  return (
    <div className='md:w-full h-full  flex justify-center'>
      <div className='md:h-full bg-[#0f1722] md:w-fit rounded-md md:p-10'>
        <div className='w-ful h-10 flex justify-center flex-col gap-1'>
            <p className='text-white flex gap-1 justify-center text-sm'>Back to <a href="/" className='text-blue-500'>Log In</a></p>
            <div className='line mt-2 mr-2'>
            </div>
        </div>
        <div className='w-full flex justify-center items-start mt-6 gap-4 text-black'>
            <span className='w-8 h-8 mt-2'><img src={leftLogo} alt="" /></span>
            <span className=''><img src={centerLogo} alt="picture" /></span>
            <span className='w-8 h-8 mt-1'><img src={rightLogo} alt="picture" /></span>
        </div>
        <div className='flex justify-center mt-5 w-full flex-col'>
            <p className='text-white md:text-3xl md:w-full letter-tracking-widest text-nowrap'>Log into your Jagex account</p>
            <p className='text-white flex justify-center mt-6'>Enter your password to continue.</p>
        </div>
        {/* <div className='w-full mt-5 relative'>
            <input type="text" className='w-full h-12 block appearance-none text-white pl-3 focus:outline-dashed outline-offset-4 outline-white focus: focus:ring-1 :ring-blue-600 rounded-md bg-transparent focus:float-end border-y border-x border-slate-500 focus:border-0 hover:border-slate-400' id='emailInput' placeholder='' required/>
            <label htmlFor="emailInput" className='text-[#9b9ba2] absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto '>Email</label>
        </div> */}
        <div className="relative mt-5">
            <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-1 appearance-none dark:text-white dark:border-gray-600 border-y border-x border-slate-500 focus:border-0 hover:border-slate-500 dark:focus:border-blue-500 focus:outline-dashed outline-white outline-offset-4 focus:ring-1 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_outlined" className="absolute text-sm text-[#9b9ba2] dark:text-gray-400 duration-200 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-[#9b9ba2] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
        </div>
        <button onClick={()=>{toggle1.setToggleCode(!toggle1.toggleCode)}}  className='bg-[#0c8ae6] w-full h-12 rounded-md mt-5'><p className='text-sm'>Continue</p></button>
        <a href="/" className='flex justify-center mt-8 text-blue-400 text-sm hover:underline'>Forget password?</a>
      </div>
    </div>
  )
}

export default Email
