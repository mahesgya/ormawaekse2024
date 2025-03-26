import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Publikasi() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>Publikasi</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Menyebarkan beragam informasi, baik yang berasal dari internal maupun eksternal Ormawa Eksekutif PKU IPB agar memberikan keterbukaan terkait dengan jalannya kegiatan-kegiatan Ormawa Eksekutif PKU IPB. Dalam pelaksanaannya, kegiatan ini dilaksanakan melalui platform media sosial Ormawa Eksekutif PKU IPB, seperti Instagram.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Mahasiswa PKU IPB dapat mengetahui informasi yang berkaitan dengan kegiatan yang dilaksanakan oleh Ormawa Eksekutif PKU IPB melalui media sosial Ormawa Eksekutif PKU IPB.</p>
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

export default Publikasi
