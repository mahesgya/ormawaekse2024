import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Widyaris() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Widyaris</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Program yang bertujuan memberikan pengetahuan kepada KM PKU tentang inovasi-inovasi terbaru dari IPB atau pun luar IPB. Program ini akan disampaikan melalui feed instagram Ormawa Eksekutif PKU dan juga IG Nextin</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Meningkatkan wawasan KM PKU terhadap inovasi-inovasi baru sehingga dapat memacu mereka untuk membawakan inovasi-inovasi lainnya</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Widyaris 1</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">4-17 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">29 Februari 2024 - 17 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Widyaris 2</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Widyaris 3</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">1-18 Mei 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">2-4 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Widyaris 4</h2>
          </div>
          {/* 1 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Widyaris;
