import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function UjarPKU() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>Ujar PKU</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Merupakan konten menarik berupa video dari keseharian mahasiswa PKU IPB dalam menjalankan masa perkuliahan. Ujar PKU terbagi dalam 2 segmen yaitu Parodi PKu dan DigmAsk mencakup konten-konten berformat meme atau wawancara singkat kepada KM PKU IPB sebagai sarana penghibur KM PKU IPB.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Sebagai ajang hiburan untuk mahasiswa PKU IPB terkait kehidupan perkuliahan.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Maret - September 2024</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default UjarPKU
