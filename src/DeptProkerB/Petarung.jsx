import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Petarung() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SLHDetail.png" alt="" className="detailImage" />
        <h1>
          PETARUNG <br />
          (Pemuda Tata Ruang)
        </h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Petarung atau Pemuda Tata Ruang merupakan sebuah instrumen kegiatan yang memiliki tujuan untuk memberikan wawasan dan pengalaman bagi KM PKU IPB mengenai tata kelola sampah dan kesehatan lingkungan. Kegiatan ini terdiri atas 3
            kegiatan utama, yaitu pemberian materi atau Workshop, Forum Group Discussion (FGD), dan implementasi projek hasil dari FGD. Melalui kegiatan ini kami berharap dapat membantu membangun kesadaran yang nyata bagi KM PKU IPB
            khususnya dalam masalah lingkungan dan sosial.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Memberikan dampak yang jelas akan pentingnya lingkungan yang ada di sekitar;
            <br />
            2. Meningkatkan kesadaran KM PKU IPB terhadap masalah serta solusi sosial dan lingkungan hidup di sekitar;
            <br />
            3. Memberikan pengalaman akan apa yang terjadi pada keadaan di lingkungan khususnya di sekitar IPB.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Open Recruitment</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">02 Februari 2024 - 10 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">17 Februari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Workshop</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Implementasi Projek</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">20 Februari 2024 - 02 Maret 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">05 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pengumuman</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Petarung;
