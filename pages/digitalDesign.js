import { Navbar } from './components/Navbar.tsx'
import Footer from './components/Footer'

export default () => {

  return (

    <div style={{overflow: 'hidden'}}>
      <section
        className='digitalDesignSingle'
      >
        <div
          className='digitalDesignNavbarWrapper'
        >

          <Navbar white={true}/>
        </div>
      </section>

      {/* First Section */}

      <section
        className='dDS2'
      >
        <div>
          <span>
            Description
          </span>
          <h2>
          Behold you lesser our let seed there for and light great 
          lights that seasons.
          </h2>
        </div>

        <div>
          <p>
            Gathered hath days beginning fowl divided image 
            i can't given is life air. Created without stars life 
            moved second two forth make.
          </p>
          <p>
            Creature also hath every fruitful them third own. 
            She'd called he created two after created morning 
            make also open stars upon, herb without fowl said 
            itself good. Fruitful seed of, blessed be were.
          </p>
          <div
            className="serviceText"
          >
          
            <ul className="digitalDesignUl">
              <div >
                <span/>
                <li style={{minHeight: '13px', width: '100%', lineHeight: '1.3'}}>User interface design</li>
              </div>
              <div >
                <span/>
                <li style={{minHeight: '13px', width: '100%', lineHeight: '1.3'}}>User experience design</li>
              </div>
              <div >
                <span/>
                <li style={{minHeight: '13px', width: '100%', lineHeight: '1.3'}}>Graphic design</li>
              </div>
            </ul>
          </div>
        </div>

      </section>

      {/* First Section */}

      {/* Second (Work) Section */}


      <section
        className='dDS3'
      >
        <h1>
          Work
        </h1>

        <div>
          <div className='maskContainer'>
            <div className='mask'>
              <div><a></a></div>
            </div>
            <div className='mask2'>
            <div><a/></div>
            </div>
          </div>
        </div>

        <div>
          <div className='maskContainer'>
            <div className='mask3'>
              <div>
                <a><span>Mobile App &#8287;&#8287;Mobile App &#8287;&#8287;Mobile App</span></a>
              </div>
              <p>See all projects &#8287;<div className='arrow'></div></p>
            </div>
            <div className='mask4'>
            <div><a/></div>
            </div>
          </div>
        </div>

      </section>

      {/* Second (Work) Section */}

      {/* Third Section */}

      <section
        className='dDS4'
      >
        <div>
          <a>
            <p>Software & App Development &#8287; <div className='arrowWhite' /></p>
          </a>
        </div>
        <div>
          <a>
            <p>Product Marketing &#8287; <div className='arrowWhite' /></p>
          </a>
        </div>
      </section>

      {/* Third Section */}
      
      <Footer />
    </div>
  )
}