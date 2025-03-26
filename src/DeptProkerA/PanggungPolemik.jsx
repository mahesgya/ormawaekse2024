import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function PanggungPolemik() {
  return (
    <div>
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/AkpresDetail.png" alt="" className="detailImage" />
      <h1>Panggung Polemik</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>
        Panggung Polemik merupakan kegiatan pencerdasan oleh  narasumber yang kemudian membuka forum diskusi antarmahasiswa  Pendidikan Kompetensi Umum IPB dengan mengangkat isu-isu politik  khususnya hasil dari Pilpres Indonesia 2024 dalam kehidupan  demokrasi di tengah masyarakat. Mahasiswa akan dibagi menjadi dua  kelompok secara besar yaitu tim pro terhadap mosi dan tim kontra  terhadap mosi yang bisa memberikan dan mengadu argumen mereka  dengan tujuan saling mengkritisi argumen dari pihak lawan yang diberikan.
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
        <p>31 Maret 2024</p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default PanggungPolemik
