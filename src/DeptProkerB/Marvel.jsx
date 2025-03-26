import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Marvel() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/PSDMDetail.png" alt="" className="detailImage" />
        <h1>Maximize Your Value and Potential (MARVEL)</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            MARVEL merupakan bentuk seminar inside mengenai leadership dan lain sebagainya. Tidak hanya itu, MARVEL juga bukan sekedar seminar biasa, melainkan seminar yang di dalamnya kita akan merancang project bersama-sama. Sasaran dari
            program MARVEL meruapakan mahasiswa PKU yang bertujuan untuk mengembangkan & meningkatkan soft skill dan hard skill serta KM PKU IPB mampu mengaplikasikan informasi yang disosialisasikan melalui projek yang akan dinilai untuk
            melihat perkembangan progres untuk mencapai nilai-nilai Sustainable Development Goals (SDGs).
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Meningkatkan kemampuan softskill dan hardskill yang mampu diaplikasikan dalam kehidupan sebagai mahasiswa.
            <br />
            2. KM PKU IPB mampu mengaplikasikan informasi yang disosialisasikan melalui projek yang akan dinilai untuk melihat perkembangan progres untuk mencapai nilai-nilai Sustainable Development Goals (SDGs).
            <br />
            3. Dengan pensosialisasian materi dan pemberian projek, KM PKU IPB mampu menumbuhkembangkan softskill dan hardskill
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Maret - April 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Marvel;
