import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function ProjectX() {
  return (
    <div>
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/SenbudDetail.png" alt="" className="detailImage" />
      <h1>Project X</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Project X adalah kegiatan dimana Departemen Seni Budaya akan membawa mahasiswa PKU IPB jalan-jalan secara virtual ke tempat-tempat yang menjadi pusat seni budaya.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>1. Terlestarinya tempat-tempat yang menjadi pusat seni budaya di Indonesia,
<br />2. Terbangunnya rasa cinta dan kesadaran atas pentingnya tempat-tempat pusat seni budaya di mahasiswa PKU IPB.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>22 Maret 2024, 17 Mei 2024, 19 Juli 2024, dan 20 September 2024</p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default ProjectX
