import { useState } from 'react'
import { Navbar } from "./components/Navbar.tsx"
import ContactUs from './components/ContantUs';
import Footer from './components/Footer'
import { useRouter } from 'next/router'


const Contact = () => {

  const [buttonContactUs, setButtonContactUs] = useState(true);

  const router = useRouter()

  return (
    <>
      <div
        className='contactContainer'
      >
        <Navbar />

        {/* Let's talk div */}


        <div
          className='letsTalk'
        >
          <div
            style={{
              display: 'flex',
              minHeight: '84px',
              maxWidth: '100%',
            }}
          >
            <span
              rel="preload"
              href="/fonts/Swansea-Bold.woff"
              as="font"
              crossOrigin=""
              className='letstalkspan'
              style={{
                fontSize: '70px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                color: '1d1d1d',
              }}
            >
              Let's talk
            </span>
            <div>
              <span
                className='contactSpan'
              >
                Contact
              </span>
            </div>
          </div>
          <div
            style={{
              maxWidth: '501px',
              minHeight: '90px',
              paddingTop: '41px'
            }}
          >
            <span
              style={{
                fontFamily: 'Swansea',
                fontSize: '20px',
                lineHeight: '1.5',
                color: '#525252'
              }}
            >
              Deep light land beginning form fish there brought fifth 
              forth earth us make cattle seasons every spirit one can't 
              behold, creepeth fish thing male his him.
            </span>
          </div>

            
        </div>

        {/* Let's talk div */}

        <ContactUs 
                trigger={buttonContactUs} 
              />

        {/* Offices */}

        <div
          className='officesContainer'
         
        >
          <a
            className='offices'
            href="#"
          >
            <h2
              style={{
                fontFamily: 'Swansea',
                fontSize: '24px',
              }}
            >London, UK</h2>
            <p
              className='adresa'
            >
              Vlaška ulica, 70 E
              hello@asynclabs.co
              +385 99 4936 071
            </p>
          </a>
          <a 
            href="#"
            className='offices'
          >
            <h2
              style={{
                fontFamily: 'Swansea',
                fontSize: '24px',
                lineHeight: '1.1'
              }}
            >
              Zagreb, Croatia
            </h2>
            <p
              className='adresa'
            >
              Vlaška ulica, 70 E
              hello@asynclabs.co
              +385 99 4936 071
            </p>
          </a>
          <a
            href="#"
            className='offices'
          >
            <h2
              style={{
                fontFamily: 'Swansea',
                fontSize: '24px',
                lineHeight: '1.1'
              }}
            >
              Zagreb, Croatia
            </h2>
            <p
              className='adresa'
            >
              Lipovečka, 1
              hello@asynclabs.co
              +385 99 4936 071
            </p>
          </a>
        </div>
      </div>

      {/* Offices */}

      <Footer noMargin={true}/>
    </>
  )
}

export default Contact;