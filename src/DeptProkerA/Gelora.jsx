import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Gelora() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/PeragaDetail.png" alt="" className="detailImage" />
        <h1>GELORA PKU <br /> (Gerakan Olahraga PKU) </h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Gerakan Olahraga PKU (GELORA PKU) yang bertujuan untuk menjaga dan meningkatkan tali silaturahmi antar mahasiswa PKU IPB serta menjadi wadah bagi mahasiswa PKU IPB angkatan 60 dalam bidang olahraga.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
          Memfasilitasi mahasiswa PKU IPB untuk menyalurkan hobinya dalam bidang olahraga.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pendaftaran</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">1-5 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">11-13 Februari 2024 <br /> 15-16 Februari 2024 <br /> 4-7 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pelaksanaan</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Penutupan</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">9 Maret 2024</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gelora
