import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Digmanews() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>Digmanews</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Berupa penyiaran berita melalui poster yang berisi kabar prestasi yang diraih mahasiswa PKU IPB, peristiwa di lingkungan PKU IPB, dan Peringatan Hari Besar Nasional maupun Internasional.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Mahasiswa PKU IPB dapat mengetahui informasi mengenai kampus, luar kampus, hari besar nasional maupun internasional serta berita yang sedang hangat di lingkungan IPB.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Januari - September 2024</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default Digmanews
