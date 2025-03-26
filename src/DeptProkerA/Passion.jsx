import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Passion() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AkpresDetail.png" alt="" className="detailImage" />
        <h1>PASSION X FESMA</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Kegiatan PASSION (PKU Arts and Sports Competition) X FESMA (Festival Mahasiswa) 2024 merupakan kegiatan megaproker berupa kompetisi di bidang seni, olahraga, dan akademik yang diselenggarakan oleh Departemen Seni Budaya, Departemen Pemuda Olahraga, dan Departemen Akademik Prestasi Ormawa Eksekutif PKU IPB 2022/2023 yang ditujukan khusus untuk mahasiswa PKU IPB 2022/2023. Dalam kegiatan ini, akan ada penampilan-penampilan yang menarik yang akan meramaikan kegiatan PASSION X FESMA 2024 pada saat pembukaan dan penutupan kegiatan nanti. Kemudian, pada kegiatan ini, terdiri dari berbaga macam mata perlombaan diberbagai bidang nominasi seni dan olahraga
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
          Tujuan kegiatan PASSION X FESMA 2024 adalah: <br />
Membangkitkan semangat kompetitif Mahasiswa PKU IPB University 2023/2024 melalui kompetisi yang kreatif dan bergengsi. <br />
Menyediakan wadah bagi Mahasiswa PKU IPB University 2023/2024 untuk menyalurkan minat dan bakat. <br /> 
Memberikan apresiasi atas kreativitas dan jiwa kompetitif Mahasiswa PKU IPB University 2023/2024. <br />
Memberikan kenangan berkesan bagi Mahasiswa PKU IPB University 2023/2024 sebelum masuk ke departemen masing-masing.

          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>27 April - 27 Juni 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Passion;
