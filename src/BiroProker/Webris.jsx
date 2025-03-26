import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Webris() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Webris</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Program dengan pengerjaan jangka panjang yang mengelola website dari ormawa eksekutif PKU sehingga bisa menyampaikan informasi-informasi tentang proker, Penilaian bulanan dan juga wadah yang menampung keluhan KM PKU IPB, serta menyampaikan prestasi-prestasi KM PKU.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Penyampaian dan Laporan Proker-proker ormawa Eksekutif PKU, Penilaian Bulanan dan pengumuman anggota Biro dan Departemen terbaik setiap bulannya, Penyampaian Keluhan KM PKU IPB, Pemaparan Prestasi KM PKU.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Persiapan dan Pemeliharaan</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">Januari-September 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">April 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Re-Launching</h2>
          </div>
          {/* 1 */}
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Webris
