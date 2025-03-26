import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Rapat100Hari() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/BPHDetail.png" alt="" className="detailImage" />
      <h1>Rapat 100 Hari</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Rapat 100 Hari Kerja dilakukan secara luring dan dihadiri oleh seluruh Anggota Kabinet Dirgantara Mahamimpi, sebagai bentuk apresiasi dan pelaporan program kerja yang telah dilaksanakan selama 100 hari.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>- Melakukan kilas balik perjalanan 100 Hari Kabinet Dirgantara Mahamimpi <br />
- Melaporkan rekap program kerja setiap biro/departemen yang telah terlaksana dalam 100 hari <br />
- Memberikan apresiasi kepada seluruh anggota Kabinet Dirgantara Mahamimpi yang sudah melaksanakan tugasnya dengan baik selama 100 hari kerja</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>05 Mei 2024</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default Rapat100Hari

