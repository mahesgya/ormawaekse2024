import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function KabarKastrat() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/KastratDetail.png" alt="" className="detailImage" />
        <h1>Kabar Kastrat</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Kabar Kastrat merupakan kegiatan pengkajian suatu isu/informasi/berita sosial maupun politik yang sedang hangat diperbincangkan oleh sebagian besar masyarakat Indonesia. Pengkajian isu/informasi/berita tersebut dilakukan dengan
            kemampuan riset, analisis, dan kritis dengan melihat sudut pandang berbagai pihak sehingga menghasilkan kajian yang sesuai dengan harapan.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Sebagai media informasi dan pengetahuan bagi mahasiswa mengenai kondisi politik Indonesia yang sedang terjadi saat ini. <br />
            2. Sebagai penentuan sikap Departemen Kajian Aksi Strategis Ormawa Eksekutif PKU IPB terhadap segala isu, topik, polemik, dan kontroversi yang beredar di masyarakat. Sebagai arahan bagi mahasiswa terhadap segala isu, topik,
            polemik, dan kontroversi yang beredar di masyarakat. <br /> 3. Sebagai arahan bagi mahasiswa terhadap segala isu, topik, polemik, dan kontroversi yang beredar di masyarakat. <br /> 4. Sebagai pembentukan sikap kritis mahasiswa
            agar mereka menggunakan akal sehat dan kemampuan berpikir analitis nya terhadap berita yang beredar di masyarakat dan dapat mengambil keputusan yang rasional berbasis informasi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Februari-Agustus 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KabarKastrat;
