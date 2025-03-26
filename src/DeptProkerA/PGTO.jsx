import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function PGTO() {
  return (
    <div>
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/PeragaDetail.png" alt="" className="detailImage" />
      <h1>PGTO <br /> (PKU Goes To Omi) </h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>
        PKU Goes to OMI ini diselenggarakan agar mahasiswa PKU IPB angkatan 60 yang memiliki kompetensi di bidang olahraga dapat menjadi kontingen perwakilan dari tingkat PKU IPB untuk mengikuti serangkaian lomba yaitu OMI IPB.
        </p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>
        Mempersiapkan mahasiswa PKU IPB untuk mengikuti kegiatan OMI IPB 2024.
        </p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
      </div>
      <div className="timeline">
        {/* 1 */}
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">Pendaftaran</h2>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
          <div className="timeline__date">13-15 Februari 2024</div>
        </div>
        {/* 1 */}
        <div className="timeline__component">
          <div className="timeline__date timeline__date--right">17 Februari - 3 Maret 2024</div>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">Pelaksanaan</h2>
        </div>
        {/* 1 */}
        <div className="timeline__component timeline__component--bg">
          <h2 className="timeline__title">Penutupan</h2>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component">
          <div className="timeline__date">9 Maret 2024</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default PGTO
