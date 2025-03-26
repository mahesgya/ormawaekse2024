import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Rapot() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/InternalDetail.png" alt="" className="detailImage" />
        <h1>Rapot</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Program yang akan dilaksanakan pada pertengahan periode, merupakan program berupa mengingat dan mengevaluasi kembali kinerja setiap anggota Dirgantara Mahamimpi. Jujur dalam memberikan evaluasi antara satu sama lain mengenai
            kekurangan dan kelebihannya. yang dapat diakses dan dibaca oleh setiap biro/departemen. Serta akan menjadi penilaian untuk pimpinan terbaik di Farewell Party Dirgantara Mahamimpi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Sebagai motivasi dan evaluasi bagi pengurus Ormawa Eksekutif PKU IPB untuk semakin meningkatkan kinerjanya dan sebagai sarana pengontrol kinerja pengurus Ormawa Eksekutif PKU IPB.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pembuatan Form Rapot</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">22 Januari 2024</div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">April, Juni, dan Agustus</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title"></h2>
            <p className="timeline__paragraph">Pengiriman Form Rapot</p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Rapot;
