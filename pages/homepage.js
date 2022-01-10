import Footer from "./components/Footer";
import DiscussProject from './components/DiscussProject';
import { Navbar } from './components/Navbar'

export default () => {
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