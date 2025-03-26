import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SobatGerak() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/PeragaDetail.png" alt="" className="detailImage" />
        <h1>Sobat Gerak </h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Sobat Gerak PKU merupakan kegiatan berupa video kreatif dengan Mahasiswa PKU sebagai sasaran dalam kegiatan ini. video kreatif ini berisi ajakan untuk sehat, gerak, dan terdapat wawancara langsung dengan mahasiswa PKU.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Menciptakan semangat baru khususnya dalam bidang olahraga untuk mahasiswa PKU IPB.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Maret - Mei 2024 dan Juli - Agustus 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SobatGerak;
