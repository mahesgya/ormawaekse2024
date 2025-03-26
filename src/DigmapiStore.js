import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SectionStore from './DigmapiStore/sectionStore';

function DigmapiStore() {
    return (
      <div className="DigmapiStore">
        <Navbar/>
        <SectionStore/>
        <Footer/>
      </div>
    );
  }
  
  export default DigmapiStore;
  