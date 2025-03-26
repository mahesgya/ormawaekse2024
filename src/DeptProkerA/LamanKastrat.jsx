import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function LamanKastrat() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/KastratDetail.png" alt="" className="detailImage" />
        <h1>Laman Kastrat</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Laman Kastrat merupakan kegiatan pemberitahuan seputar isu/informasi/berita sosial maupun politik yang sedang hangat diperbincangkan dan informasi mengenai Kastrat oleh sebagian besar masyarakat Indonesia. Pengkajian isu/informasi/berita tersebut dilakukan dengan kemampuan riset, analisis, dan kritis dengan melihat sudut pandang berbagai pihak sehingga menghasilkan kajian yang sesuai dengan harapan.
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
          <p>Februari-Agustus 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LamanKastrat
