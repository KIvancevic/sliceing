import React from 'react'
import Image from 'next/image'
import asyncLabsWhiteLogo from '../../public/asyncLabsWhiteLogo.png'


const Footer = () => {
  return (
    <>
      <div
        className='footerMainDiv'
      >
        <div className='footerDiv1'>
          <div
            style={{
              flexGrow: '1',
              color: 'white'
            }}
          >
            <a href="/">
              <Image
                src={asyncLabsWhiteLogo}
                alt="asyncLabsWhiteLogo"
              />
            </a>
          </div>
          <div
            className='footerMidDiv'
          >
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
          </div>
          <div
            className='footerMidDiv'
          >
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <div
            className='footerMidDiv'
          >
            <p>Async d.o.o.</p>
            <p>Lipovečka 1,</p>
            <p>10000 Zagreb</p>
            <p>Croatia</p>
          </div>
          <div
            className='helloFooter'
          >
            <p>hello@asynclabs.co</p>
          </div>
        </div>
        <div className='footerDiv2'>
          <p>© Async Labs. All rights reserved 2020.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  )
}

export default Footer
