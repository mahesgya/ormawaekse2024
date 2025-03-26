import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function BawaMimpimu() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/InternalDetail.png" alt="" className="detailImage" />
        <h1>Bawa Mimpimu</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Program inovasi dari Biro Internal yang berkolaborasi dengan Departemen Adkesmah akan melibatkan Komti atau KM PKU. Program ini merupakan forum diskusi bersama kabinet dan komti yang akan menguatkan pandangan baik dari Komti
            ataupun KM PKU IPB kepada Ormawa Eksekutif PKU IPB. Selain itu, KM PKU juga dapat menyampaikan mimpinya mengenai program kerja Ormawa Eksekutif PKU IPB melalui Komti dan akan diolah kembali oleh Ormawa Eksekutif PKU IPB.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            Mewadahi anggota Ormawa Eksekutif Ormawa PKU IPB untuk mengembangkan kapasitas dan wawasannya dan Menjadi wadah juga untuk membangun kerjasama antara Ormawa Eksekutif PKU IPB dengan Komti agar program kerja Ormawa Eksekutif PKU
            IPB dapat terlaksana dengan baik.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pra- Bawa Mimpimu X Kekuras</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">10 Februari 2024</div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">11-16 Februari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title"></h2>
            <p className="timeline__paragraph">Persiapan Bawa Mimpimu X Kekuras</p>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Bawa Mimpimu X Kekuras</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">17 Februari 2024</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BawaMimpimu;
