import React from 'react'
import { FaHandHolding, FaHandHoldingUsd, FaCertificate } from 'react-icons/fa';



export const About = () => {
  return (
    <div id='about' className='max-w-screen min-w-screen h-max bg-white flex flex-col justify-around py-[2rem] items-center gap-6'>
        <h1 className='w-full text-center text-3xl capitalize'>why choose <span className='underline underline-offset-2 undr'>marangi tours</span></h1>
        <div className='w-full h-max flex flex-col justify-around items-center lg:flex-row gap-[4rem] lg:px-[10%]'>
            <div className='w-full lg:w-1/4 flex flex-col gap-4 items-center px-[1rem]'>
                <FaHandHolding size={70} color='gold'/>
                <h2 className='uppercase font-medium text-3xl text-center'>Trusted</h2>
                <p className='text-[20px] text-center'>Over <strong>1000+</strong> customers have entrusted us to be their guide to touring the wonders of the word</p>
            </div>
            <div className='w-full lg:w-1/4 flex flex-col gap-4 items-center px-[1rem]'>
                <FaHandHoldingUsd size={70} color='gold'/>
                <h2 className='uppercase font-medium text-3xl text-nowrap text-center'>Budget Friendly</h2>
                <p className='text-[20px] text-center'>Our tour plan are all inclusive and they are pocket friendly.</p>
            </div>
            <div className='w-full lg:w-1/4 flex flex-col gap-4 items-center px-[1rem]'>
                <FaCertificate size={70} color='gold'/>
                <h2 className='uppercase font-medium text-3xl text-center'>certified</h2>
                <p className='text-[20px] text-center'>We hold a certificate for best tourism agency in Kenya and also our business is certified by the Government of Kenya</p>
            </div>
        </div>

    </div>
  )
}
