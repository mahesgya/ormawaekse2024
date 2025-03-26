import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function MedbrandProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>BIRO MEDBRAND</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Digmacast.png" className="fotoProker" />
            <Link to="/digmacast">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Digmanews.png" className="fotoProker" />
            <Link to="/digmanews">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Ujar PKU.png" className="fotoProker" />
            <Link to="/ujarpku">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Publikasi.png" className="fotoProker" />
            <Link to="/publikasi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Kenal Kabinet.png" className="fotoProker" />
            <Link to="/kenalkabinet">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Sayembara Logo.png" className="fotoProker" />
            <Link to="/sayembaralogo">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Grand Launching.png" className="fotoProker" />
            <Link to="/grandlaunching">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Suarakan Mimpi.png" className="fotoProker" />
            <Link to="/suarakanmimpi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Kaleidoskop.png" className="fotoProker" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MedbrandProker;
