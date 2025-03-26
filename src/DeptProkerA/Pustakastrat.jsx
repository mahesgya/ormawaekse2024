import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Pustakastrat() {
  return (
    <div>
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/KastratDetail.png" alt="" className="detailImage" />
      <h1>Pustakastrat</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>
        Melakukan Pembaharuan Mading yang bertujuan untuk mengganti properti yang usang. Isi dari mading adalah kabar-kabar atau isu terhangan yang dikemas dalam media poster, propaganda, dan lain-lain.
        </p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>
        Sebagai media informasi dan pengetahuan bagi mahasiswa mengenai kondisi politik Indonesia yang sedang terjadi saat in dan sebagai penentuan sikap Departemen Kajian Aksi Strategis Ormawa Eksekutif PKU IPB terhadap segala isu, topik, polemik, dan kontroversi yang beredar di masyarakat.
        </p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Februari-Agustus 2024</p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Pustakastrat
