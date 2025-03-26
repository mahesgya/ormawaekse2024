import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function GrandLaunching() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>Grand Launching</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Kegiatan memperkenalkan nama kabinet, desain logo kabinet, logo setiap Biro dan Departemen, pengenalan pengurus, serta video perkenalan setiap biro/departemen dalam kepengurusan Ormawa Eksekutif PKU IPB Kabinet Dirgantara Mahamimpi.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Mahasiswa PKU IPB dapat mengenal Ormawa Eksekutif PKU IPB dan mengetahui gambaran umum terkait tugas pokok serta fungsi dari setiap biro dan departemen.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Januari - Februari 2024</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default GrandLaunching
