import { Navbar } from './components/Navbar'
import Footer from './components/Footer'

const Careers = () => {
  return (
    <>

     {/* First Section */}

    <div className="headerCareers">
      <Navbar />

      <div style={{ position: 'relative'}}>
        <div 
          className='spanContainer'
        >
          <span
            className="carrersCreativeSpan"
           
          >
          Creative talent wanted
          </span>
          <div>
            <span
              className='careersSpan'
            >
              Careers
            </span>
          </div>
        </div>
      </div>

      {/* First Section */}

      {/* Second Section */}

      <div
        className='careersHeaderGrid'
      >
        <div
          className='careersHeaderPicture'
        />
          <span>
            Carrers
          </span>
          <h2>
          The kind of people we look for
          </h2>
          <div
            className='careersDescription'
          >
            <div>
              <h3>Hungry for new knowledge</h3>
              <p>
                Itself sixth bearing beast was she'd image spirit tree 
                male gathering and open gathered fourth itself can't 
                seas. Dominion one, gathered bearing third.
              </p>
            </div>
            <div>
              <h3>Not afraid of the unknown</h3>
              <p>
                Don't signs creepeth creeping light spirit kind divide 
                fowl, female saying, forth after bring created. Good 
                that fish set don't void.
              </p>
            </div>
          </div>
      </div>

       {/* Second Section */}

    </div>

    {/* Third Section */}

        <section
        className='careersPositions'
      >
        <h1>Positions</h1>
        <div
          className='availablePositions'
        >
          <a>
            <div> Technology </div>
            <div> Back-End Developer </div>
            <div> Full-Time <div className='arrowWhite marginLeft'/></div>
          </a>
          <a href="/uxDesigner">
            <div> Creative </div>
            <div> UX Designer </div>
            <div> Full-Time <div className='arrowWhite marginLeft'/></div>
          </a>
          <a>
            <div> Technology </div>
            <div> Software Developer </div>
            <div> Full-Time <div className='arrowWhite marginLeft'/></div>
          </a>
          <a>
            <div> Strategy </div>
            <div> Senior Manager </div>
            <div> Full-Time <div className='arrowWhite marginLeft'/></div>
          </a>
        </div>
      </section>

    {/* Third Section */}

      <Footer />
    </>
  )
}

export default Careers;