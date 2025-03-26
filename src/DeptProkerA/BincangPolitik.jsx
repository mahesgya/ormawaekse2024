import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function BincangPolitik() {
  return (
    <div>
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/KastratDetail.png" alt="" className="detailImage" />
      <h1>Bincang Politik</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>
        Bincang Politik merupakan kegiatan berupa obrolan dengan  narasumber yang dilaksanakan dalam bentuk podcast. Kegiatan ini  dikemas dalam bentuk video yang akan ditayangkan di sosial media  Departemen Kajian Aksi Strategis berupa YouTube yang dapat diakses  oleh seluruh Keluarga Mahasiswa Pendidikan Kompetensi Umum IPB.
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
        <p>1 Maret 2024</p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default BincangPolitik

