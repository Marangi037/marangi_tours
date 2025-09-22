import React, { useRef, useEffect, useState } from 'react'
import { Navbar } from './navbar/Navbar.jsx'
import { cards, images } from './images.js';

export const Header = () => {
  const [items, setItems] = useState(cards);
  const [isClicked, setIsclicked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const next = () => {
        setItems((prevItems) => {
        const firstItem = prevItems[0];
        const restItems = prevItems.slice(1);
        setIsclicked(true);
        setTimeout(() => {
                setIsclicked(false);
            }, 500);
        return [...restItems, firstItem];

        });
    }
  const prev = () => {
      setItems((prevItems) => {
          const lastItem = prevItems[prevItems.length - 1];
          const restItems = prevItems.slice(0, -1);
          setClicked(true);
          setTimeout(() => {
              setClicked(false);
          }, 500);
          return [lastItem, ...restItems];
      });
  }
  return (
    <section className='header'>
        <Navbar/>
         <section className="carousel">
              <div className={`container  ${clicked ? "prev" : ''} ${isClicked ? "next" : ''}`}>
                  {items.map((item, index) => 
                      <div key={index} className="item">
                          <img className="itemImage" src={item.imgUrl} alt="image" />
                          <div  className={`content ${isClicked ? "next" : ''}`}>
                              <h2 className="itemDestination backdrop-blur-lg">{item.destination}</h2>
                              <h1 className="itemTitle backdrop-blur-lg">{item.title}</h1>
                              <h2 className="itemDesc backdrop-blur-lg">{item.desc}</h2>
                          </div>
                      </div>
                  )}
              </div>
    
              <div className={`thumbnail ${isClicked ? "next" : ''} ${clicked ? "prev" : ''}`}>
                  {items.map((item, index) => 
                  <div key={index} className="thumbnailCard">
                      <img className="thumbnailImage" src={item.imgUrl} alt="image" />
                      <div className="thumbnailContent">
                          <h1 className="thumbnailDestination">{item.destination}</h1>
                          <h1 className="thumbnailTitle">{item.title}</h1>
                      </div>
                  </div> 
                  )}
              </div>
              <div className="arrows">
                  <img  onClick={() => prev()} className="leftArrow" src={images.arrow} alt="left arrow" />
                  <img onClick={() => next()} className="rightArrow" src={images.arrow} alt="right arrow" />
              </div>
          </section> 
    </section>
  )
}
