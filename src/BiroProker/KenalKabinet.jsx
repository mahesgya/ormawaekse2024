import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function KenalKabinet() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>KenalKabinet</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Pembuatan postingan instagram yang berisi track record, prestasi, pengalaman unik, dan menarik dari BPH atau staf Ormawa Eksekutif PKU IPB yang diunggah pada akun Instagram baru “Kenal Kabinet”.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>BPH dan staf Ormawa Eksekutif PKU IPB Kabinet Dirgantara Mahamimpi dapat dikenal oleh mahasiswa PKU IPB.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>April - September 2024</p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default KenalKabinet