import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SuratPKU() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Surat PKU</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Survei yang dilakukan pada masa awal jabatan dengan menyasar warga PKU untuk menyampaikan segala harapan dan keluh kesahnya sehingga bisa dibantu selesaikan oleh Ormawa Eksekutif PKU dengan Proker yang akan disusun.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Pengumpulan data awal sebagai data dasar dalam penentuan Proker.</p>
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
            <div className="timeline__date">14 Januari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">20-30 Januari 2024</div>
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
            <div className="timeline__date">5 Februari 2024</div>
          </div>
          {/* 1 */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SuratPKU
