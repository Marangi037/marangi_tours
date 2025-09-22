import React from 'react'
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="h-screen w-screen flex bg-[url('/login_bg.jpg')] bg-cover bg-center justify-center items-center bg-white lg:bg-none">
      <div className='w-[80%] h-[60%] lg:w-[60%] lg:h-[70%] text-white lg:text-black flex gap-[2rem] lg:border-2 border-black rounded-lg lg:shadow-gray-400 lg:shadow-lg overflow-hidden'>
        <div className="hidden lg:flex w-1/2 h-full">
         <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none">
            <defs>
              <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="500" height="500">
                <image xlinkHref="/login_bg.jpg" width="500" height="500" preserveAspectRatio="xMidYMid slice" />
              </pattern>
            </defs>

            <path
              d="
                M0,0 
                L450,0
                C380,100 380,150 450,250
                C520,350 520,400 450,500
                L0,500 Z"
              fill="url(#imgPattern)"
            />
          </svg>

        </div>
        <div className="w-full lg:w-1/3 h-[90%] flex justify-center items-center bg-[rgba(0_0_0_0.3)] backdrop-blur-lg">
          <form className='flex flex-col w-full h-[80%] justify-center items-center gap-4'>
            <div className="w-[90%] h-max flex flex-col">
              <label className='text-3xl' htmlFor="input">email</label>
              <input type="text" className="w-full h-[40px] bg-gray-300 px-2 rounded-md text-black" placeholder='email' />
            </div>
            <div className="w-[90%] h-max flex flex-col">
              <label className='text-3xl' htmlFor="input">password</label>
              <input type="text" className="w-full h-[40px] bg-gray-300 px-2 rounded-md text-black" placeholder='password'/>
            </div>
            <a className='forgot_password' href="#">forgot password</a>
            <button className='bg-yellow-400 rounded-md text-2xl font-bold uppercase w-[120px] h-[40px] text-white'>login</button>
            <h1 className='text-2xl'>don't have an acccount? <Link to={"/signup"} ><span className='signup_link'>sign up</span></Link></h1>
          </form>
        </div>
      </div>
    </section>
  )
}
