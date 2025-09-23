import React, { useState, useEffect } from 'react'
import { testimonials, images } from './images.js'
import { FaStar } from 'react-icons/fa';

export const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
          const updateCardsToShow = () => {
              if(window.innerWidth >= 1024){
                  setCardsToShow(testimonials.length);
              }else{
                  setCardsToShow(1);
              }
          };
              updateCardsToShow();
          
          window.addEventListener('resize', updateCardsToShow);
          return  () => window.removeEventListener('resize', updateCardsToShow);
      }, [])

   const nextProject = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
  
      const prevProject = () => {
          setCurrentIndex((prevIndex) => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
      }
  return (
    <section id='testimonials' className='max-w-screen lg:min-h-[80vh] h-[60vh] flex justify-center items-center overflow-hidden relative py-[2rem] lg:py-0 bg-white'>
        

            <div className='bg-gray-400 w-[70%] lg:w-[50vw] h-[45vh] lg:h-[60vh] border-2 border-transparent rounded-2xl pb-5 flex flex-col gap-6 overflow-hidden my-4'>
              <div className='flex w-full justify-between items-center'>
                <h1 className='underline underline-offset-1 text-1.5xl pl-10 uppercase'>mrg tours</h1>
                <img className='object-cover w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded-b-4xl' src={testimonials[currentIndex].imageUrl} alt={testimonials[currentIndex].name} />         
              </div>
              <p className='text-start text-[10px] lg:text-3xl mx-[4rem] relative'><span className='absolute top-[-1.5rem] left-[-1.5rem] text-5xl text-yellow-300 font-bold'>“</span>{testimonials[currentIndex].desc} <span className='absolute top-[-1.5rem] lg:right-[2rem] right-[-1rem] text-5xl text-yellow-300 font-bold'>”</span></p>
              <div className='w-full h-max flex flex-col gap-2'>
                <h1 className='lg:text-3xl text-xl pl-18'>{testimonials[currentIndex].name}</h1>
                <div className='flex pl-18'>{Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => <span key={i}>< FaStar className='lg:text-3xl text-xl' color='yellow'/></span>  )}</div>
              </div>
          </div>
          
        <div className="absolute w-full lg:min-w-[80%] h-[20px] flex justify-between top-1/2 px-0 lg:px-8">
          <img onClick={() => prevProject()} className='w-[40px] h-[40px] bg-gray-500 rounded-[50%] p-2' src={images.arrow} alt="arrow right" />
          <img onClick={() => nextProject()} className='rotate-180 w-[40px] h-[40px] bg-gray-500 rounded-[50%] p-2' src={images.arrow} alt="arrow left" />
        </div>
    </section>
  )
}
