import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function WelcomingParty() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/InternalDetail.png" alt="" className="detailImage" />
        <h1>Welcoming Party</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Program ini akan dilaksanakan dua kali. Yang pertama akan dilaksanakan secara daring, dimana anggota akan saling berkenalan dan menjadi awal yang manis untuk mulai bekerja sama. Yang kedua akan dilaksanakan secara luring, yang
            mana akan ada pemaparan program kerja biro/departemen serta penyematan pin oleh BPH sebagai simbol Dirgantara Mahamimpi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Sebagai ajang untuk menyambut dan mengenal lebih dalam pengurus Dirgantara Mahamimpi.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pembentukan Panitia</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">1 Januari 2024</div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">3 Januari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title"></h2>
            <p className="timeline__paragraph">Welcoming Party Online</p>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Welcoming Party Offline</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">28 Januari 2024</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WelcomingParty;
