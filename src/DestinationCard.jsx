import React, { useState } from 'react'
import "./destination.css";
import { FaStar } from 'react-icons/fa';

export const DestinationCard = ({imageUrl, name, rating}) => {
    const [showContent, setShowContent] = useState(false);
  return (
    <div onMouseEnter={() => setShowContent(!showContent)} on onMouseLeave={() => setShowContent(!showContent)} className='min-w-full md:min-w-2/4 lg:min-w-1/4 max-h-[400px] flex flex-col rounded-md relative transition-all duration-1500'>
            <img className='w-full h-full rounded-md object-cover' src={imageUrl} alt="destination image" />
            {showContent && <div className='cardDiv'>
                    <h2 className='lg:text-[20px] text-[16px] px-2'>{name}</h2>
                    <div className='flex w-max h-max px-2'>{Array.from({ length: rating }).map((_, i) => <span key={i}>< FaStar size={10} color='yellow'/></span>  )} </div>
                </div>
            }
                            
    </div>
  )
}
