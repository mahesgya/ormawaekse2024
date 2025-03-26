import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function SerasiProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
        <div className="div-proh2"><h2>BIRO SERASI</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Internalisasi.png" className="fotoProker" />
            <Link to="/internalisasi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Relasi Evaluasi.png" className="fotoProker" />
            <Link to="/relasievaluasi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Humas 101.png" className="fotoProker" />
            <Link to="/humas101">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Database.png" className="fotoProker" />
            <Link to="/database">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SerasiProker;
