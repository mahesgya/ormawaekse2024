import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Sehari() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/KastratDetail.png" alt="" className="detailImage" />
        <h1>SEHARI <br />(Sekolah Revolusi Satu Hari)</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Melakukan pencerdasan terhadap KM PKU terkait Sosial Politik, cara berpikir, analisis, dan juga kajian.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
          Sebagai pembentukan sikap kritis mahasiswa agar mereka menggunakan akal sehat dan kemampuan berpikir analitis nya terhadap berita yang beredar di masyarakat dan dapat mengambil keputusan yang rasional berbasis informasi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>2 Februari-3 Februari 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sehari
