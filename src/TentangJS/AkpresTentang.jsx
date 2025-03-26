import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/TentangDetail.css";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

function AkpresTentang() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <Navbar />
      <div className="card-background">
      <div className="detail-tentangH2"><h2>DEPARTEMEN AKPRES</h2></div>
        <div className="containerBiro">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang sekre" onClick={flipCard}>
              <img src="Akpres/3.png" alt="" />
            </div>
            <div className="kartuTentang back sekre" onClick={flipCard}>
              <img src="Akpres/4.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/1.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/2.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang bendahara" onClick={flipCard}>
              <img src="Akpres/5.png" alt="" />
            </div>
            <div className="kartuTentang back bendahara" onClick={flipCard}>
              <img src="Akpres/6.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/7.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/8.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/9.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/10.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/11.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/12.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/13.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/14.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/15.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/16.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/17.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/18.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/19.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/20.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/21.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/22.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/23.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/24.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/25.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/26.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/27.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/28.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/29.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/30.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/31.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/32.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/33.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/34.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Akpres/35.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Akpres/36.png" alt="" />
            </div>
          </ReactCardFlip>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AkpresTentang;
