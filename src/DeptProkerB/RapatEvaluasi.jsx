import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function RapatEvaluasi() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SLHDetail.png" alt="" className="detailImage" />
        <h1>Rapat Evaluasi</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Rapat evaluasi merupakan kegiatan yang perlu dilakukan oleh Departemen Sosial Lingkungan Hidup. Kegiatan ini memiliki tujuan untuk mengetahui sejauh mana perkembangan dari setiap program kerja yang sedang atau akan dijalani.
            Selain itu kegiatan ini bertujuan untuk meningkatkan rasa kekeluargaan diantara masing masing staf.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Mengevaluasi Kinerja dan Capaian Program Departemen Sosial Lingkungan Hidup dalam melaksanakan program-program yang telah direncanakan sebelumnya. Hal ini meliputi peninjauan terhadap capaian target, efektivitas kegiatan,
            serta evaluasi terhadap dampak yang telah dicapai.
            <br />
            2. Menyusun Rencana Aksi Perbaikan serta mengidentifikasi area-area di mana mereka masih perlu meningkatkan kinerja. Tujuan ini adalah untuk menyusun rencana aksi perbaikan yang konkret dan dapat diimplementasikan untuk
            meningkatkan efektivitas program dan kegiatan departemen.
            <br />
            3. Mendorong Inovasi dan Kreativitas dengan tujuannya adalah untuk merangsang ide-ide baru dan solusi-solusi kreatif dalam mengatasi masalah-masalah lingkungan hidup yang dihadapi.
            <br />
            4. Menjaga Akuntabilitas dan Transparansi dan melakukan evaluasi secara berkala, departemen sosial lingkungan hidup dapat menjaga akuntabilitas terhadap kinerjanya. Tujuan ini adalah untuk memastikan bahwa departemen bertanggung
            jawab atas penggunaan sumber daya yang diberikan dan memberikan informasi yang transparan kepada pihak terkait.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>8 Februari - 8 September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RapatEvaluasi;
