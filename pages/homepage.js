import Footer from "./components/Footer";
import DiscussProject from './components/DiscussProject';
import  Navbar  from './components/Navbar'

const HomePage = () => {
  return (
    <>
      <div
       className="navDiv"
      >
        <Navbar white={true}/>
      </div>
      <DiscussProject />
      <Footer />
    </>
  )
}

export default HomePage;