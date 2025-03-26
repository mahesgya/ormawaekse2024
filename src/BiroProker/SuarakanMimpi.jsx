import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SuarakanMimpi() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>Suarakan Mimi</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Merupakan penyajian karya seni digital dalam bentuk poster digital bertemakan Pemilu 2024 sehingga dapat dikomunikasikan dan diapresiasi oleh KM PKU IPB yang memberikan fungsi edukasi kepada Mahasiswa PKU mengenai pentingnya menyuarakan pendapat terkait pemilu.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Mahasiswa PKU IPB dapat menyuarakan pendapat terkait Pemilu 2024 lewat karya yang dibuat.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Februari 2024</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default SuarakanMimpi
