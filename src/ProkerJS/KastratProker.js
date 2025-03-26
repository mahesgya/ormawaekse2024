import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function KastratProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
        <div className="div-proh2">
          <h2>DEPARTEMEN KASTRAT</h2>
        </div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Ngopi.png" className="fotoProker" />
            <Link to="/ngopi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Kabar Kastrat.png" className="fotoProker" />
            <Link to="/kabarkastrat">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Laman Kastrat.png" className="fotoProker" />
            <Link to="/lamankastrat">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Pustakastrat.png" className="fotoProker" />
            <Link to="/pustakastrat">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Serentak.png" className="fotoProker" />
            <Link to="/serentak">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Sehari.png" className="fotoProker" />
            <Link to="/sehari">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Bincang Politik 1.png" className="fotoProker" />
            <Link to="/bincangpolitik">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Panggung Polemik.png" className="fotoProker" />
            <Link to="/panggungpolemik">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Study Visit.png" className="fotoProker" />
            <Link to="/studyvisit">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>

          <div className="prokerComingSoon">
            <img src="ImagesProker/Kursus Politik.png" className="fotoProker" />
            <Link to="/studyvisit">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KastratProker;
