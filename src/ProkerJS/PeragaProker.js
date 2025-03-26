import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function PeragaProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
        <div className="div-proh2">
          <h2>DEPARTEMEN PERAGA</h2>
        </div>
        <div className="BiroProker">
          <div className="prokerComingSoon">
            <img src="ImagesProker/Sobat Gerak.png" className="fotoProker" />
            <Link to="/sobatgerak">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/PGTO.png" className="fotoProker" />
            <Link to="/pgto">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Gelora PKU.png" className="fotoProker" />
            <Link to="/gelorapku">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Passion.png" className="fotoProker" />
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

export default PeragaProker;
