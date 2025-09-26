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
    <section id='testimonials' className='max-w-screen lg:min-h-[80vh] h-[40vh] flex justify-center items-center overflow-hidden relative py-[2rem] lg:py-0 bg-white'>
        

            <div className='bg-yellow-500 w-[70%] lg:w-[60vw] h-[25vh] lg:h-[60vh] border-2 border-transparent rounded-2xl pb-5 flex gap-[2rem] overflow-hidden my-4 lg:px-[4rem] px-[1rem]'>
              <div className='w-2/3 h-full flex flex-col gap-[2rem] pt-4 items-start justify-center'>
              <div className='flex gap-2 w-full justify-start items-center'>
                <h1>MRG</h1>
                 <h1 className='text-[18px] text-nowrap lg:text-2xl capitalize'>mrg tours</h1>
              </div>
               <div className='flex flex-col gap-2'>
                  <p className='text-start text-[10px] lg:text-3xl relative px-2'><span className='absolute top-[-1.5rem] left-0 text-2xl lg:text-5xl text-yellow-300 font-bold'>“</span>{testimonials[currentIndex].desc} <span className='absolute top-[-1.5rem] lg:right-[-1rem] right-0  text-2xl lg:text-5xl text-yellow-300 font-bold'>”</span></p>
                <h1 className='lg:text-3xl text-[18px] text-start w-full'> - {testimonials[currentIndex].name}</h1>
               </div>
                
              </div>
              <div className='h-full w-1/3 flex justify-center items-center'>
                <img className='object-fill rounded-[50%] w-[150px] h-[100px] lg:w-[300px] lg:h-[300px]' src={testimonials[currentIndex].imageUrl} alt={testimonials[currentIndex].name} />   
              </div>
          </div>
          
        <div className="absolute w-full lg:w-[80%] h-[20px] flex justify-between top-1/2 px-0 lg:px-8">
          <img onClick={() => prevProject()} className='w-[40px] h-[40px] bg-gray-500 rounded-[50%] p-2' src={images.arrow} alt="arrow right" />
          <img onClick={() => nextProject()} className='rotate-180 w-[40px] h-[40px] bg-gray-500 rounded-[50%] p-2' src={images.arrow} alt="arrow left" />
        </div>
    </section>
  )
}
