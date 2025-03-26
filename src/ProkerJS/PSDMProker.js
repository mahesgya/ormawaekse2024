import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function PSDMProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>DEPARTEMEN PSDM</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Iconics.png" className="fotoProker" />
            <Link to="/iconics">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Crayon.png" className="fotoProker" />
            <Link to="/crayon">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Marvel.png" className="fotoProker" />
            <Link to="/marvel">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Simfoni.png" className="fotoProker" />
            <Link to="/simfoni">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/LOKA.png" className="fotoProker" />
            <Link to="/simfoni">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Sekolah Ormawa.png" className="fotoProker" />
            <Link to="/simfoni">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PSDMProker;
