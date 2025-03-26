import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SehariBerbatik() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SenbudDetail.png" alt="" className="detailImage" />
        <h1>Sehari Berbatik</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Kegiatan dimana mahasiswa PKU IPB menggunakan batik setiap hari Rabu minggu pertama di setiap bulannya. Departemen Seni Budaya akan mempublikasi dan membuat konten dari Mahasiswa PKU IPB yang memakai batik terunik.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Terbangunnya rasa cinta dan kesadaran atas pentingnya batik di Mahasiswa PKU IPB.
            <br />
            2. Lestarinya baju khas Indonesia yaitu Batik di Mahasiswa PKU IPB.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Setiap Hari Rabu Minggu Pertama di setiap bulan Februari-September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SehariBerbatik;
