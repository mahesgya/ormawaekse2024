import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function BPHProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>BADAN PENGURUS HARIAN</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Rapat BPH.png" className="fotoProker" />
            <Link to="/rapatbph">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Rapat Pimpinan.png" className="fotoProker" />
            <Link to="/rapatpimpinan">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Rapat Sekretaris.png" className="fotoProker" />
            <Link to="/rapatsekretaris">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Rapat Bendahara.png" className="fotoProker" />
            <Link to="/rapatbendahara">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Rapat Ketua.png" className="fotoProker" />
            <Link to="/rapatketua">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Rapat 100 Hari.png" className="fotoProker" />
            <Link to="/rapat100hari">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BPHProker;
