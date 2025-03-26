import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SurkesuUAS() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Surkesu UAS</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Survei yang dilakukan 1 minggu sebelum UAS dilakukan. Hasilnya akan dimanfaatkan untuk mengetahui seberapa siap mahasiswa PKU dalam menghadapi UAS serta persiapan mereka.Survey akan dilakukan melewati jotform.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Mengetahui Kesiapan KM PKU dalam menghadapi UAS.</p>
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
            <div className="timeline__date">23 Mei 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">25-29 Mei 2024</div>
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
            <div className="timeline__date">31 Mei</div>
          </div>
          {/* 1 */}
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SurkesuUAS;
