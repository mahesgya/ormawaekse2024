import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Riszwei() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Riszwei</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Program Kerja ini membantu teman-teman Ormawa Eksekutif PKU untuk mengetahui Update Kondisi dan perkembangan Problematika yang terjadi di KM PKU setiap 2 Bulan.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Mengetahui Kondisi terbaru dari KM PKU dan Problematika yang terjadi didalamnya.</p>
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
            <div className="timeline__date">10 Juni 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">18-22 Juni 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pelaksanaan</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Publikasi</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">29 Juli 2024</div>
          </div>
          {/* 1 */}
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Riszwei
