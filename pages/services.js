import  Navbar  from "./components/Navbar.tsx"
import Link from "next/link"
import Footer from "./components/Footer"
import DiscussProject from "./components/DiscussProject"

const Services = () => { 
  return (
    <>
      <div className='servicesContainer'>

        <Navbar />

        {/* First Section */}
          
          <div style={{ position: 'relative'}}>
            <div
              className="servicesDiv"
            >
              <span>
                Building from idea to implementation
              </span>
              <div>
                <span
                  className='servicesSpan'
                >
                  Services
                </span>
              </div>
            </div>
          </div>

          {/* First Section */}

          {/* Second Section */}

          <div 
            className="serviceSecondSection"
          >
              <div className="laptop1" />
              <div className="laptop2" /> 
            <div 
              className="serviceSecondSectionDiv"
            >
              <div
                className="serviceText"
              >
                <h2
                  style={{
                    fontSize: '46px',
                    fontFamily: 'Swansea',
                    minWidth: '295px',
                    lineHeight: '1.26',
                    fontWeight: 'bold',
                    color: '#1d1d1d'
                  }}
                >
                  Software & App Development
                </h2>
              
                <p
                  style={{
                    fontFamily: 'Swansea',
                    fontSize: '20px',
                    lineHeight: '30px',
                    minWidth: '295px',
                    color: '#525252'
                  }}
                >
                  Delivering tailored engineering solutions to your 
                  business challenges, whether it is architectural 
                  design or web application development.
                </p>
                <ul className="serviceUl">
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>Frontend development</li>
                  </div>
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>Backend development</li>
                  </div>
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>Mobile development</li>
                  </div>
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>Blockchain development</li>
                  </div>
                </ul>
                
                <Link 
                    href="/"
                    passHref
                  >
                  <button
                    style={{
                      width: '220px',
                      height: '60px',
                      cursor: 'pointer',
                      border: 'none',
                      backgroundColor: '#1d1d1d',
                      color: '#fff'
                    }}
                  >
                  
                      View Service
                  </button>
                </Link>
                </div>
            </div>
          </div>

          {/* Second Section */}

          {/* Thirs Section */}

          <div 
              className="serviceThirdSection"
            >
              <div 
                className="serviceThirdSectionDiv"
              >
                <div
                className="serviceText"
              >
                <h2
                  style={{
                    fontSize: '46px',
                    fontFamily: 'Swansea',
                    minWidth: '295px',
                    lineHeight: '1.26',
                    fontWeight: 'bold',
                    color: '#1d1d1d'
                  }}
                >
                  Digital Design
                </h2>
              
                <p
                  style={{
                    fontFamily: 'Swansea',
                    fontSize: '20px',
                    lineHeight: '30px',
                    minWidth: '295px',
                    color: '#525252'
                  }}
                >
                  From UX to visual design, we create digital 
                  products people love to use.
                </p>
                <ul className="serviceUl">
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>User Interface Design</li>
                  </div>
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>User Experience Design</li>
                  </div>
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>Graphic Design</li>
                  </div>
                </ul>
                
                <Link 
                    href="/"
                    passHref
                  >
                  <button
                    style={{
                      width: '220px',
                      height: '60px',
                      cursor: 'pointer',
                      border: 'none',
                      backgroundColor: '#1d1d1d',
                      color: '#fff'
                    }}
                  >
                  
                      View Service
                  </button>
                </Link>
                </div>
              </div>

              <div className="pmlamp" />
              <div className="pmlaptop" />

            </div>

            <div 
            className="serviceSecondSection"
          >
              <div className="digitalDesignPhoto1" />
              <div className="digitalDesignPhoto2" /> 
            <div 
              className="serviceSecondSectionDiv"
            >
              <div
                className="serviceText"
              >
                <h2
                  style={{
                    fontSize: '46px',
                    fontFamily: 'Swansea',
                    minWidth: '295px',
                    lineHeight: '1.26',
                    fontWeight: 'bold',
                    color: '#1d1d1d'
                  }}
                >
                  Digital Design
                </h2>
              
                <p
                  style={{
                    fontFamily: 'Swansea',
                    fontSize: '20px',
                    lineHeight: '30px',
                    minWidth: '295px',
                    color: '#525252'
                  }}
                >
                 From UX to visual design, we create digital 
                  products people love to use.
                </p>
                <ul className="serviceUl">
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>User Interface Design</li>
                  </div>
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>User Experience Design</li>
                  </div>
                  <div >
                    <span/>
                    <li style={{height: '13px'}}>Graphic Design</li>
                  </div>
                </ul>
                
                <Link 
                    href="/digitalDesign"
                    passHref
                  >
                  <button
                    style={{
                      width: '220px',
                      height: '60px',
                      cursor: 'pointer',
                      border: 'none',
                      backgroundColor: '#1d1d1d',
                      color: '#fff'
                    }}
                  >
                  
                      View Service
                  </button>
                </Link>
                </div>
            </div>
          </div>
      </div>

      {/* Third Section */}

      {/* Foruth Section */}

      <section className="serviceForthSection">
        <div>
          <div className="heading">
            <div className="numberOne"></div>
            <h2>Analysis & Idea</h2>
          </div>
          <p >
            Branding and digital are forte, given 
            the state of the world, think.
          </p>
        </div>
        <div>
          <div className="heading">
            <div className="numberTwo"></div>
            <h2>Design & Development</h2>
          </div>
          <p >
            Dominion it air bearing subdue seed 
            very wherein, moving seas.
          </p>
        </div>
        <div>
          <div className="heading">
            <div className="numberThree"></div>
            <h2>Testing & Launch</h2>
          </div>
          <p >
            Land very had you and god make void 
            forth said all and greater.
          </p>
        </div>
      </section>

      {/* Foruth Section */}

      
      {/* Let's discuss your project section */}
      
      <DiscussProject />

      {/* Let's discuss your project section */}
      <Footer />
    </>
  )
}

export default Services;