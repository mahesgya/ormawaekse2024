import './App.css';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SectionTentang from "./Components/sectionTentang";

function Tentang() {
  return (
    <div className="Tentang">
      <div className="Konten">
        <Navbar />
        <SectionTentang />
        <Footer />
      </div>
    </div>
  );
}

export default Tentang;
