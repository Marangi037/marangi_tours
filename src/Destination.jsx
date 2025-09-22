import React, { useEffect, useState } from 'react'
import { destinations, images } from './images.js'

import { DestinationCard } from './DestinationCard.jsx';

export const Destination = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
   

    useEffect(() => {
        const updateCardsToShow = () => {
            if(window.innerWidth >= 1024){
                setCardsToShow(destinations.length);
            }else{
                setCardsToShow(1);
            }
        };
            updateCardsToShow();
        
        window.addEventListener('resize', updateCardsToShow);
        return  () => window.removeEventListener('resize', updateCardsToShow);
    }, [])

   
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
        console.log(currentIndex);
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? destinations.length - 1 : prevIndex - 1);
        console.log(currentIndex);
    }
    return (
        <section id='destination' className='destination bg-[url("/bg_destination.jpg")]'>
            <h1 className='destinationHeader'>explore our various destinations</h1>
            <div className='destinationContainer' style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}>
                {destinations.map((card, index) => 
                    <DestinationCard imageUrl={card.imageUrl} name={card.name} rating={card.rating} key={index}/>
                )}
            </div>
            <div className="destinationArrows">
                <img  onClick={() => prevProject()} className="destinationLeftArrow" src={images.arrow} alt="left arrow" />
                <img onClick={() => nextProject()} className="destinationRightArrow" src={images.arrow} alt="right arrow" />
            </div>
        </section>
    )
}
