import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function EkrafProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>DEPARTEMEN EKRAF</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/DirgantaraStore.png" className="fotoProker" />
            <Link to="/dirgantarastore">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Preneurzone.png" className="fotoProker" />
            <Link to="/preneurzone">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Preneurpedia.png" className="fotoProker" />
            <Link to="/preneurpedia">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Finest Class.png" className="fotoProker" />
            <Link to="/finestclass">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Creativity.png" className="fotoProker" />
            <Link to="/creativity">
              <button className="buttonProker">READ MORE</button>
            </Link> 
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Lebitre.png" className="fotoProker" />
            <Link to="/lebitre">
              <button className="buttonProker">READ MORE</button>
            </Link> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EkrafProker;
