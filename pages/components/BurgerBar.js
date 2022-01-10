
//Menu bar
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const BurgerBar = () => {


  const router = useRouter()

  const handleToogle = () => {
    setActive(!isActive);
  };



  return (
    // <div className={isActive ? "change" : "container"} onClick={handleToogle}>
    //   <div className="bar1"></div>
    //   <div className="invis"></div>
    //   <div className="bar3"></div>
    //   {isActive && <div className='dropdown-body' >    
    //                   <a href="/" >Something</a>
    //                   <a href="#" >Something else</a>
    //               </div>}
    // </div>


    
    <>
        {/* <div className={isActive ? 'isShown' : 'hidden'}>
            <div
              className='burgerInnerMenu'
            >
              
            </div>
        </div> */}
       

          <div 
            className={router.asPath === "/contact" 
                          || 
                          router.asPath === "/carrers" 
                          ? 
                          'burgerMenuContact' 
                          : 
                          router.asPath === "/uxDesigner" 
                          || 
                          router.asPath ==="/digitalDesign" 
                          || 
                          router.asPath ==="/homepage" 
                          ? 
                          'burgerMenuWhite' : 'burgerMenu'} 
  
                          />
        
    </>
  )
}
