import { Navbar } from './components/Navbar.tsx';
import Footer from './components/Footer';
import Link from 'next/link';
import ContactUs from './components/ContantUs';

const UxDesigner = () => {

  return (

    <div style={{overflow: 'hidden'}}>
      <section
        className='uxDesignerHeader'
      >
        <div
          className='digitalDesignNavbarWrapper'
        >

          <Navbar white={true}/>
        </div>
      </section>

      {/* First Section */}

      <section
        className='dDS2 uxdesigner'
      >
        <div>
          <span>
            Description
          </span>
          <h2 style={{
            fontSize: '46px',
            fontWeight: 'bold', 
            lineHeight: '1.26', 
            maxWidth: '350px',
          }}>
            <p style={{
              fontSize: '46px',
              fontWeight: 'bold', 
              lineHeight: '1.26', 
              maxWidth: '350px',
              letterSpacing: '1.3px',
              margin: '0px'
            }}>
              We’re hiring
            </p>
            a UX Designer 
          </h2>
        </div>

        <div 
        
        >
          <p>
            Deep light land beginning form fish there brought 
            fifth forth earth us make cattle seasons every spirit 
            one can't behold, creepeth fish thing male his him 
            darkness darkness night us tree.
          </p>
          <p>
            Given give make creature won't, yielding said good 
            Seed seed form replenish deep which doesn't light 
            can't our fruit seasons let light.
          </p>
          <div
            className="serviceText"
          >
          
            <ul className="digitalDesignUl bullet">
              <div >
                <li style={{
                  minHeight: '13px',
                  width: '100%',
                  lineHeight: 'normal',
                  letterSpacing: '2px',
                  color: '#1d1d1d',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}>Zagreb, Croatia</li>
              </div>
            </ul>
          </div>
        </div>

      </section>

      {/* First Section */}




      {/* Second Section Image*/}

      <section
        className='uxDesigner'
      >
        <div>
            <div
            >
              <Link href="/">
                <button
                  style={{
                    fontFamily: 'Swansea',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    letterSpacing: '1.8px',
                    textTransform: 'uppercase',
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      height: '14px',
                      borderRight: '1px solid #fff',
                      marginTop: '5px',
                    }}                
                  >
                    Prev
                  </div>
                </button>
              </Link>
              <Link href="/">
                <button
                  style={{
                    fontFamily: 'Swansea',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    letterSpacing: '1.8px',
                    textTransform: 'uppercase',
                    color: "#fff",
                  }}
                >
                  Next
                </button>
              </Link>
            </div>
        </div>

      </section>
      

      {/* Second Section Image*/}




      {/* Description Section */}

      <section 
        className='jobDescription'
      >
        <div>
          <h2>Qualifications</h2>

          <ul className="uxDesignerUl"
            style={{
              textTransform: 'none'
            }}
          >
            <div >
              <span/>
              <li >
                A minimum of 5 years designing experiences 
                and products in a professional setting.
              </li>
            </div>
            <div >
              <span/>
              <li style={{height: 'auto'}}>
                Excellent knowledge of modern HTML, CSS
              </li>
            </div>
            <div >
              <span/>
              <li style={{height: 'auto'}}>
                Fruit their days replenish first forth man after 
                morning heaven place.
              </li>
            </div>
            <div >
              <span/>
              <li style={{height: 'auto'}}>
                Creeping creepeth open firmament seed 
                lesser. Saw all gathered without. Deep thing 
                gathering, midst.
              </li>
            </div>
          </ul>
        </div>

        <div>
          <h2>Responsibilities</h2>

          <ul className="uxDesignerUl">
            <div >
              <span/>
              <li >
                Build prototypes to illustrate ideas.
              </li>
            </div>
            <div >
              <span/>
              <li style={{height: 'auto'}}>
                Rule made fruit without deep. Night there 
                a place herb our was greater fish cattle which 
                gathering fill moving days.
              </li>
            </div>
            <div >
              <span/>
              <li style={{height: 'auto'}}>
                Fruit their days replenish first forth man after 
                morning heaven place.
              </li>
            </div>
            <div >
              <span/>
              <li style={{height: 'auto'}}>
                Creeping creepeth open firmament seed 
                lesser. Saw all gathered without. Deep thing 
                gathering, midst.
              </li>
            </div>
          </ul>
        </div>
      </section>

      {/* Description Image*/}
      <ContactUs />
      <Footer />
    </div>
  )
}

export default UxDesigner;