import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/TentangDetail.css";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

function InternalTentang() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <div>
      <Navbar />
      <div className="card-background">
      <div className="detail-tentangH2"><h2>BIRO INTERNAL</h2></div>
        <div className="containerBiro">
          
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang sekre" onClick={flipCard}>
              <img src="ImagesInternal/3.png" alt="" />
            </div>
            <div className="kartuTentang back sekre" onClick={flipCard}>
              <img src="ImagesInternal/4.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/1.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/2.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang bendahara" onClick={flipCard}>
              <img src="ImagesInternal/5.png" alt="" />
            </div>
            <div className="kartuTentang back bendahara" onClick={flipCard}>
              <img src="ImagesInternal/6.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/7.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/8.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/9.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/10.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/11.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/12.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/13.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/14.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/15.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/16.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/17.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/18.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/19.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/20.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/21.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/22.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/23.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/24.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/25.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/26.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/27.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/28.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/29.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/30.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/31.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/32.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/33.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/34.png" alt="" />
            </div>
          </ReactCardFlip>
          <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
            <div className="kartuTentang" onClick={flipCard}>
              <img src="ImagesInternal/35.png" alt="" />
            </div>
            <div className="kartuTentang back" onClick={flipCard}>
              <img src="ImagesInternal/36.png" alt="" />
            </div>
          </ReactCardFlip>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InternalTentang;
