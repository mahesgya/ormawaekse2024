import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";


function SLHProker() {
    return (
      <div className="Proker">
        <Navbar/>
        <div id="ProkerBiro">
        <div className="div-proh2"><h2>DEPARTEMEN SLH</h2></div>
        <div className="BiroProker">
          
          <div className="prokerOnGoing">
            <img src="ImagesProker/Rapat Evaluasi.png" className="fotoProker" />
            <Link to="/rapatevaluasi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Bisik Berisi.png" className="fotoProker" />
            <Link to="/bisikberisi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Study Visit.png" className="fotoProker" />
            <Link to="/studyvisit">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Petarung.png" className="fotoProker" />
            <Link to="/petarung">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/M3.png" className="fotoProker" />
            <Link to="/m3">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Eskrim.png" className="fotoProker" />
            <Link to="/eskrim">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
        
        </div>
      </div>
        <Footer/>
      </div>
    );
  }
  
  export default SLHProker;