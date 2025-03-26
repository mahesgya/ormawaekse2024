import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SayembaraLogo() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>Sayembara Logo</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Merupakan kegiatan untuk mencari identitas Organisasi berupa logo yang mampu mencerminkan jati diri dari Ormawa Eksekutif PKU IPB Kabinet Dirgantara Mahamimpi 2023/2024.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Mahasiswa PKU IPB dapat membangkitkan kreativitas, jiwa kompetitif, dan memaksimalkan potensi diri dalam bidang desain logo.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Januari 2024</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default SayembaraLogo
