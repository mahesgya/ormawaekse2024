import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/TentangDetail.css";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

function BPHTentang() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <Navbar />
      <div className="card-background">
      <div className="detail-tentangH2"><h2>BADAN PENGURUS HARIAN</h2></div>
        <div className="containerCard ">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesTentang/bph1.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesTentang/bph2.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesTentang/bph3.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesTentang/bph4.png" alt="" />
            </div>
          </ReactCardFlip>
        </div>
        <div className="containerCard bph">
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesTentang/bph5.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesTentang/bph6.png" alt="" />
            </div>
          </ReactCardFlip>
          
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesTentang/bph7.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesTentang/bph8.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesTentang/bph9.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesTentang/bph10.png" alt="" />
            </div>
          </ReactCardFlip>
          
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesTentang/bph11.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesTentang/bph12.png" alt="" />
            </div>
          </ReactCardFlip>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default BPHTentang;
