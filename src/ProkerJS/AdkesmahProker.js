import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function AdkesmahProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>DEPARTEMEN ADKESMAH</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Advo Project.png" className="fotoProker" />
            <Link to="/advoproject">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Peduli UKT 2.png" className="fotoProker" />
            <Link to="/peduliukt">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Sapa Maba.png" className="fotoProker" />
            <Link to="/sapamaba">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Peduli UKT 1.png" className="fotoProker" />
            <Link to="/peduliukt">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Kekuras 1.png" className="fotoProker" />
            <Link to="/kekuras">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Advo Berbagi 1.png" className="fotoProker" />
            <Link to="/advoberbagi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Advo Berbagi 2.png" className="fotoProker" />
            <Link to="/advoberbagi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Harmony Minds.png" className="fotoProker" />
            <Link to="/harmonyminds">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Kekuras 2.png" className="fotoProker" />
            <Link to="/kekuras2">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Sempoa.png" className="fotoProker" />
          </div>
          
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdkesmahProker;
