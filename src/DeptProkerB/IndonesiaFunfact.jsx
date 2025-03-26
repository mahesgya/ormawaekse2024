import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function IndonesiaFunfact() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SenbudDetail.png" alt="" className="detailImage" />
        <h1>Indonesia Funfact</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Kegiatan Indonesian Fun Fact merupakan program rutin dimana Departemen Seni Budaya akan membuat konten edukasi tentang seni budaya yang ada di Indonesia.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>1. Lestarinya keberagaman seni dan budaya indonesia di lingkup mahasiswa PKU IPB, 2. Terbangunnya rasa cinta dan kesadaran atas pentingnya seni budaya tanah air di mahasiswa PKU IPB.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>28 Februari 2024, 24 April 2024, 26 Juni 2024, dan 28 Agustus 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IndonesiaFunfact;
