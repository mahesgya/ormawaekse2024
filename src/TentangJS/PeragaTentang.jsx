import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/TentangDetail.css";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

function PeragaTentang() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <Navbar />
      <div className="card-background">
      <div className="detail-tentangH2"><h2>DEPARTEMENT PERAGA</h2></div>
        <div className="containerBiro">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang sekre" onClick={flipCard}>
              <img src="Peraga/3.png" alt="" />
            </div>
            <div className="kartuTentang back sekre" onClick={flipCard}>
              <img src="Peraga/4.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/1.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/2.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang bendahara" onClick={flipCard}>
              <img src="Peraga/5.png" alt="" />
            </div>
            <div className="kartuTentang back bendahara" onClick={flipCard}>
              <img src="Peraga/6.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/7.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/8.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/9.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/10.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/11.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/12.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/13.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/14.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/15.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/16.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/17.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/18.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/19.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/20.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/21.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/22.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/23.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/24.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/25.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/26.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/27.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/28.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/29.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/30.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/31.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/32.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/33.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/34.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="Peraga/35.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="Peraga/36.png" alt="" />
            </div>
          </ReactCardFlip>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PeragaTentang;
