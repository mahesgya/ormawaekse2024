import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function LigaDigmapi() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/InternalDetail.png" alt="" className="detailImage" />
        <h1>Rapat Kabinet 2 X Liga Digmapi</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Pelaksanaan rapat kerja  yang bertujuan untuk membahas progres program kerja setiap biro/departemen serta evaluasi dari program kerja yang telah dijalankan dan pelaksanaan Program liga dengan bertujuan meningkatkan rasa kekeluargaan melalui sektor jasmani. Permainan menarik yang dimainkan setiap biro/departemen secara tim dan akan dilaksanakan pada hari yang sama setelah rapat kabinet kedua. 
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Menguatkan harmonisasi dan rasa kebersamaan antar pengurus Ormawa Eksekutif PKU IPB, 
          Menjaga kekuatan komitmen pengurus kepada Ormawa Eksekutif PKU IPB.  Untuk Regenerate rasa semangat kerja Dirgantara Mahamimpi. </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>2 Juni 2024</p>
        </div>
        
        
      </div>
      <Footer />
    </div>
  );
}

export default LigaDigmapi;
