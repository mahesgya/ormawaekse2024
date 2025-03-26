import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Riscol() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Riscol</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Program yang dilaksanakan secara kolaboratif dengan biro/departemen lain yang ada di Ormawa Eksekutif PKU. Program ini dilakukan jika ada permintaan dari biro/departemen lain.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Memenuhi Kebutuhan data base dari biro/departemen di Ormawa Eksekutif PKU.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Persiapan</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">13 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">Januari-September 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pelaksanaan</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Publikasi Hasil</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">Januari-September 2024</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Riscol;
