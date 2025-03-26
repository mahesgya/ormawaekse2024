import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/TentangDetail.css";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

function PSDMTentang() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <Navbar />
      <div className="card-background">
      <div className="detail-tentangH2"><h2>DEPARTEMEN PSDM</h2></div>
        <div className="containerBiro">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang sekre" onClick={flipCard}>
              <img src="PSDM/3.png" alt="" />
            </div>
            <div className="kartuTentang back sekre" onClick={flipCard}>
              <img src="PSDM/4.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/1.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/2.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang bendahara" onClick={flipCard}>
              <img src="PSDM/5.png" alt="" />
            </div>
            <div className="kartuTentang back bendahara" onClick={flipCard}>
              <img src="PSDM/6.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/7.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/8.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/9.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/10.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/11.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/12.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/13.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/14.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/15.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/16.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/17.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/18.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/19.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/20.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/21.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/22.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/23.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/24.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/25.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/26.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/27.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/28.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/29.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/30.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/31.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/32.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/33.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/34.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="PSDM/35.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="PSDM/36.png" alt="" />
            </div>
          </ReactCardFlip>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PSDMTentang;
