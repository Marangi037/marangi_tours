import React from 'react'
import { FaArrowLeft, FaArrowRight, FaLocationArrow, FaMap, FaMapMarked, FaUser } from 'react-icons/fa';

export const Accomodation = () => {
  return (
    <section id='accommodation' className='min-h-screen max-w-screen min-w-screen lg:flex bg-[url("/hotel1.jpg")] bg-center bg-cover'>
      <div className='hidden lg:flex w-1/2 min-h-screens flex-col justify-center items-center gap-[5rem] pr-[11rem]'>
          <div className='flex w-full h-max justify-center items-center gap-[5rem]'>
            <img className='min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]  accomodation-container shrink-0 grow-0' src="/hotel.jpg" alt="hotel picture" />
            <img className='min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px]  accomodation-container shrink-0 grow-0' src="/hotel1.jpg" alt="hotel picture" />
          </div>
          <div className='flex w-full h-max justify-center items-center gap-[5rem]'>
            <img className='min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] shrink-0 grow-0 accomodation-container' src="/hotel2.jpg" alt="hotel picture" />
            <img className='min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] shrink-0 grow-0 accomodation-container' src="/hotel.jpg" alt="hotel picture" />
          </div>
      </div>
      <div className='w-full min-h-screen flex flex-col justify-center items-center lg:w-1/2 bg-transparent'>
        <h1 className='lg:text-2xl text-xl font-medium text-white p-12 bg-[rgba(0,0,0,0.2)]'>We offer a various number of hotel suggestions which are strategically located making your touring journey easier and more enjoyable</h1>
        <form className='w-2/3 h-[70%] flex flex-col text-white form bg-[rgba(0,0,0,0.3)] p-2 gap-3 justify-center items-center py-6 lg:py-2 rounded-md'>
          <div className='w-full h-max flex flex-col'>
            <label className='lg:text-[35px] text-xl' htmlFor="input">Location</label>
            <div className='h-[40px] w-full relative'><span  className='absolute left-1 top-1.5'>< FaMapMarked className='text-xl lg:text-3xl' color='gold'/></span> <input className='bg-white w-full outline-0 h-[40px] pl-9 text-black rounded-md' type="text" /></div>
          </div>
          <div className='w-full h-max flex flex-col'>
            <label className='lg:text-[35px] text-xl' htmlFor="input">guests and rooms</label>
            <div className='h-[40px] w-full relative'><span className='absolute left-1 top-2'><FaUser className='text-xl lg:text-3xl' color='gold' /></span> <input className='bg-white w-full outline-0 h-[40px] text-black pl-9 rounded-md'  type="text" /></div>
          </div>
          <div className='w-full h-max flex flex-col'>
            <label className='lg:text-[35px] text-xl' htmlFor="input">check in</label>
            <input className='bg-white outline-0 h-[40px] text-black rounded-md pl-2 w-full'  type="date" />
          </div>
          <div className='w-full h-max flex flex-col'>
            <label className='lg:text-[35px] text-xl' htmlFor="input">check out</label>
            <input className='bg-white outline-0 h-[40px] text-black rounded-md pl-2 w-full'  type="date" />
          </div>
          <button className='lg:w-[160px] w-[120px] h-[40px] bg-yellow-500 relative lg:text-[16px] text-[10px] flex justify-start items-center rounded-lg pl-3 uppercase accomodation-button'>search now <span className='absolute right-3 top-2.5'><FaArrowRight className='lg:text-2xl text-[16px]' color='black' /></span></button>
        </form>
      </div>
    </section>
  )
}
