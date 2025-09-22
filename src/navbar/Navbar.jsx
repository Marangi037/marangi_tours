import React, { useState, useEffect, useRef } from 'react'
import styles from "./Navbar.module.css";
import { FaSearch } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";


export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenu, setIsMenu] = useState(false);
  const loadingElement = useRef(null);
  const handleClick = (link) => {
    setActiveLink(link);
  }
  useEffect(() => {
    const handleClick = () => {
       loadingElement.current.classList.add("next");
       setTimeout(() => {
        loadingElement.current.classList.remove("next")
       }, 1500);

    }
    document.addEventListener("click", handleClick);
    return () => {
      document.addEventListener('click', handleClick);
    }
  }, []);
  useEffect(() => {
    if(isMenu){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
    
  }, [isMenu]);

  return (
    <nav className={styles.navbar}>
      <div className='w-full h-1/2 flex justify-between items-center'>
        <div ref={loadingElement} className="loadingIndicator"></div>
        <h1 className={styles.logo}>MRG</h1>
        <h1 className={styles.centerHeading}>MARANGI TOURS</h1>
        <div className='flex w-max h-max gap-4 justify-center items-center'>
          <Link to={"/login"}><span className='flex justify-center items-center'><FaUser className='hover:text-yellow-400' size={20}></FaUser></span></Link>
          
          <div className={styles.inputContainer}>
          < FaSearch className={styles.searchIcon} />
          <input type="search" className="input" placeholder='Search' />
        </div>
        </div>
        
        <button onClick={() => setIsMenu(!isMenu)} className={styles.hamburgerButton}>
          <div className={`${styles.hamburgerContainer} ${isMenu ? styles.swipe : ''}`}>

          </div>
        </button>
      </div>
      <div className='w-full h-1/2 flex justify-center items-center'>
        <div className={styles.navElements}>
            <a onClick={() => handleClick('home')} className={`${styles.navElement} ${ activeLink === 'home' ? styles.active : ''} `} href="#">Home</a>
            <a onClick={() => handleClick('destination')} className={`${styles.navElement} ${activeLink === 'destination' ? styles.active : ''}`} href="#destination">Destination</a>
            <a onClick={() => handleClick('accommodation')} className={`${styles.navElement} ${ activeLink === 'accommodation' ? styles.active : ''}`} href="#accommodation">Accommodation</a>
            <a onClick={() => handleClick('bookNow')} className={`${styles.navElement} ${ activeLink === 'bookNow' ? styles.active : ''}`} href="#bookNow">Book Now</a>
            <a onClick={() => handleClick('about')} className={`${styles.navElement} ${ activeLink === 'about' ? styles.active : ''}`} href="#about">About</a>
            <a onClick={() => handleClick('contact')} className={`${styles.navElement} ${ activeLink === 'contact' ? styles.active : ''}`} href="#contact">Contact</a>
        </div>
      </div>
      
        

        {/* open menu */}
        {isMenu &&  
        <div className={styles.openMenuContainer}>
          <ul className={styles.openMenu}>
            <a onClick={() => handleClick('home')} className={`${styles.openMenuElement} ${ activeLink === 'home' ? styles.active : ''} `} href="#">Home</a>
            <a onClick={() => handleClick('destination')} className={`${styles.openMenuElement} ${activeLink === 'destination' ? styles.active : ''}`} href="#destination">Destination</a>
            <a onClick={() => handleClick('accommodation')} className={`${styles.openMenuElement} ${ activeLink === 'accommodation' ? styles.active : ''}`} href="#accommodation">Accommodation</a>
            <a onClick={() => handleClick('bookNow')} className={`${styles.openMenuElement} ${ activeLink === 'bookNow' ? styles.active : ''}`} href="#bookNow">Book Now</a>
            <a onClick={() => handleClick('about')} className={`${styles.openMenuElement} ${ activeLink === 'about' ? styles.active : ''}`} href="#about">About</a>
            <a onClick={() => handleClick('contact')} className={`${styles.openMenuElement} ${ activeLink === 'contact' ? styles.active : ''}`} href="#contact">Contact</a>
          </ul>
          <div className={styles.openMenuSearchButton}>
            <div className={styles.searchContainer}>
              < FaSearch className={styles.openMenuSearchIcon} />
            </div>
            
            <input type="text" placeholder='Search' />
            <button className={styles.submitSearch}>
              <FaArrowRight className={styles.arrowIcon} />
            </button>
            
          </div>
          <div className={styles.copyrightContainer}>
            <h1 className='text-[20px]'>&copy; copyright 2025. All rights rerseved</h1>
          </div>
        </div>
        }
        
    </nav>
  )
}
