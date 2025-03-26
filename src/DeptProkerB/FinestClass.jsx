import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function FinestClass() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/EkrafDetail.png" alt="" className="detailImage" />
        <h1>Finest Class x Stuvis</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Program pelatihan yang berkelanjutan tentang pengelolaan finansial dan investasi bagi KM PKU IPB agar bisa belajar dan mengeksplorasi lebih banyak potensi finansial dan investasi yang mereka miliki dilakukan secara daring dan
            luring. Dengan tambahan Study Visit guna menambah wawasan dan melihat secara langsung mengenai dunia finansial dan investasi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Membuka minat dan kemampuan KM PKU IPB untuk bisa mengelola finansial serta memberanikan diri untu berinvestasi,
            <br />
            2. Memberikan wawasan lebih tentang pengelolaan finansial dan investasi,
            <br />
            3. Melihat bagaimana proses manajemen pada suatu perusahaan secara langsung.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Class #1</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">24 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">25 Februari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Class #2</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Class #3</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">02 Maret 2024</div>
          </div>
          {/* 1 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FinestClass;
