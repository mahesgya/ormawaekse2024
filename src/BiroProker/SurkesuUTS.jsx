import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SurkesuUTS() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Surkesu UTS</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Survei yang dilakukan 1 minggu sebelum UTS dilakukan. Hasilnya akan dimanfaatkan untuk mengetahui seberapa siap mahasiswa PKU dalam menghadapi UTS serat persiapan mereka. Survey akan dilakukan melewati gform dan juga wawancara.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Mengetahui Kesiapan KM PKU dalam menghadapi UTS.</p>
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
            <div className="timeline__date">28 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">1-7 Maret 2024</div>
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
            <div className="timeline__date">9 Maret 2024</div>
          </div>
          {/* 1 */}
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SurkesuUTS;
