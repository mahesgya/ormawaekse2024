import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/TentangDetail.css";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

function AdkesmahTentang() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <Navbar />
      <div className="card-background">
      <div className="detail-tentangH2"><h2>DEPARTEMEN ADKESMAH</h2></div>
        <div className="containerBiro">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang sekre" onClick={flipCard}>
              <img src="Adkesmah/3.png" alt="" />
            </div>
            <div className="kartuTentang back sekre" onClick={flipCard}>
              <img src="Adkesmah/4.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/1.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/2.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang bendahara" onClick={flipCard}>
              <img src="Adkesmah/5.png" alt="" />
            </div>
            <div className="kartuTentang back bendahara" onClick={flipCard}>
              <img src="Adkesmah/6.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/7.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/8.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/9.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/10.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/11.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/12.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/13.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/14.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/15.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/16.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/17.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/18.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/19.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/20.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/21.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/22.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/23.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/24.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/25.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/26.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/27.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/28.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/29.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/30.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/31.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/32.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/33.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/34.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Adkesmah/35.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Adkesmah/36.png" alt="" />
            </div>
          </ReactCardFlip>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdkesmahTentang;
