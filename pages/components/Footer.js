import React from 'react'
import Image from 'next/image'
import asyncLabsWhiteLogo from '../../public/asyncLabsWhiteLogo.png'
import Link from 'next/link'


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
            <Link href="/">
              <Image
                src={asyncLabsWhiteLogo}
                alt="asyncLabsWhiteLogo"
              />
            </Link>
          </div>
          <div
            className='footerMidDiv'
          >
            <Link href="#">About</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Blogs</Link>
            <Link href="#">Contact</Link>
          </div>
          <div
            className='footerMidDiv'
          >
            <Link href="#">Facebook</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
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
