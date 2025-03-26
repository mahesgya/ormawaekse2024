import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Simfoni() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/PSDMDetail.png" alt="" className="detailImage" />
        <h1>Self Improvement for New Experience (SIMFONI)</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            SIMFONI Merupakan kegiatan study visit yang dilakukan oleh biro/ departemen dengan pihak internal atau eksternal. SIMFONI merupakan program yangdisediakan oleh departemen PSDM untuk mengembangkan relasi serta pengetahuan biro &
            departemen. Tujuannya, kita dapat menggali informasi lebih dalam mengenai apa yang kita tuju guna untuk menjadikan Ormawa Eksekutif PKU yang unggul & inovatif.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Memberi pembekalan materi yang memiliki relevansi dengan Ormawa.
            <br />
            2. Meningkatkan kaderisasi yang dapat memberikan penerusOrmawa yang handal, cakap, dan paham tentang relevansi Ormawa di era society 5.0.
            <br />
            3. Menciptakan mahasiswa PKU IPB yang memiliki softskill mumpuni dan daya saing yang tinggi dalam menghadapi masa perkuliahan khususnya dalam Organisasi mahasiswa.
            <br />
            4. Mengetahui informasi yang berhubungan dengan biro/ departemen dari pihak eksternal maupun internal.
            <br />
            5. Membentuk potensi public speaking, critical thinking, problem solving, serta softskill bahkan hardskill lainnya bagi KM PKU IPB secara inklusif.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Maret - September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Simfoni;
