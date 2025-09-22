import React from 'react';
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <section className="h-screen w-screen flex bg-[url('/login_bg.jpg')] bg-cover bg-center justify-center items-center bg-white lg:bg-none">
      <div className='w-[80%] h-[60%] lg:w-[60%] lg:h-[70%] text-white lg:text-black flex gap-[2rem] lg:border-2 border-black rounded-lg lg:shadow-gray-400 lg:shadow-lg overflow-hidden'>
        <div className='lg:w-1/2 w-full h-full flex justify-center items-center  bg-[rgba(0_0_0_0.3)] backdrop-blur-lg'>
          <form className='flex flex-col justify-center items-center gap-4' action="submit">
            <div className='flex w-[80%] h-max gap-2'>
                <div className='w-[50%] h-max flex flex-col'>
                  <label className='text-2xl' htmlFor="input">firstname</label>
                  <input type="text"  className='w-full h-[40px] px-2 text-black bg-gray-300 rounded-md outline-0'/>
              </div>
              <div className='w-[50%] h-max flex flex-col'>
                <label className='text-2xl' htmlFor="input">lastname</label>
                <input type="text"  className='w-full h-[40px] px-2 text-black bg-gray-300 rounded-md outline-0'/>
              </div>
            </div>
            
            <div className='w-[80%] h-max flex flex-col'>
              <label className='text-2xl' htmlFor="input">email</label>
              <input type="email"  className='w-full h-[40px] px-2 text-black bg-gray-300 rounded-md outline-0'/>
            </div>
            <div className='w-[80%] h-max flex flex-col'>
              <label className='text-2xl' htmlFor="input">password</label>
              <input type="password"  className='w-full h-[40px] px-2 text-black bg-gray-300 rounded-md outline-0'/>
            </div>
            <button className='bg-yellow-400 rounded-md text-2xl font-bold uppercase w-[120px] h-[40px] text-white'>signup</button>
            <h1 className='text-2xl'>already have an account? <Link className='signup_link' to={"/login"}>login</Link></h1>
          </form>

        </div>
        <div className='hidden lg:flex h-full w-1/2'>
           <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none">
              <defs>
                <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="500" height="500">
                  <image xlinkHref="/login_bg.jpg" width="500" height="500" preserveAspectRatio="xMidYMid slice" />
                </pattern>
              </defs>

              <g transform="scale(-1,1) translate(-500,0)">
                <path
                  d="
                    M0,0 
                    L450,0
                    C380,100 380,150 450,250
                    C520,350 520,400 450,500
                    L0,500 Z"
                  fill="url(#imgPattern)"
                />
              </g>
            </svg>

        </div>
      </div>
    </section>
  )
}
