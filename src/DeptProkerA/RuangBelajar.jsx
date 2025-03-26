import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function RuangBelajar() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AkpresDetail.png" alt="" className="detailImage" />
        <h1>Ruang Belajar</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Ruang Belajar merupakan salah satu Program Kerja dari Departemen Akademik Prestasi Ormawa Eksekutif PKU IPB yang merupakan rangkaian belajar yang bertujuan untuk menyediakan wadah bagi Mahasiswa PKU IPB untuk berlatih dan
            belajar bersama. Kegiatan ini dilakukan dengan pembuatan video belajar oleh tutor sebaya, kemudian terdapat kuis Asah Otak dan Try Out untuk melatih dan membantu Mahasiswa PKU mempersiapkan UTS dan UAS.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Memberikan wadah kepada para tutor sebaya untuk menyalurkan minat dan bakatnya di mata kuliah tertentu.
            <br />
            -Membantu Mahasiswa PKU IPB untuk memahami materi
            <br />
            -Menyediakan wadah bagi mahasiswa PKU untuk berlatih dan belajar bersama.
            <br />
            -Menciptakan suasana positif di lingkup Mahasiswa PKU IPB.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>15 Januari - 1 Juni 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RuangBelajar;
