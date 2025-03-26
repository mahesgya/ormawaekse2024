import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function SenbudProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>DEPARTEMEN SENBUD</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Sehari Berbatik.png" className="fotoProker" />
            <Link to="/sehariberbatik">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Indonesia Funfact.png" className="fotoProker" />
            <Link to="/indonesiafunfact">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Project X.png" className="fotoProker" />
            <Link to="/projectx">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Passion.png" className="fotoProker" />
            <Link to="/passion">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Seri x Art.png" className="fotoProker" />
            <Link to="/passion">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SenbudProker;
