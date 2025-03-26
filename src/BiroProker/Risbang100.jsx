import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Risbang100() {
  return (
    <div>
      <div className="Proker">
        <Navbar />
        <div className="detailProker">
          <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
          <h1>Risbang 100</h1>
          <div className="detailDiv">
            <h3>Deskripsi</h3>
            <p>Program ini adalah sebuah program hiburan bagi masyarakat KM PKU IPB yang mana mereka akan bermain didalam sebuah tim untuk menebak hasil survei yang berkaitan dengan kondisi lingkungan di PPKU.</p>
          </div>
          <div className="detailDiv">
            <h3>Tujuan</h3>
            <p>Hiburan bagi KM PKU dan mengetahui seberapa jauh warga KM PKU mengetahui hal-hal di lingkungan sekitarnya.</p>
          </div>
          <div className="detailDiv">
            <h3>Timeline</h3>
          </div>
          <div className="timeline">
            <div className="timeline__component timeline__component--bg">
              <h2 className="timeline__title">Persiapan</h2>
              <p className="timeline__paragraph"></p>
            </div>
            <div className="timeline__middle">
              <div className="timeline__point"></div>
            </div>
            <div className="timeline__component">
              <div className="timeline__date">Maret-April 2024</div>
            </div>
            <div className="timeline__component">
              <div className="timeline__date timeline__date--right">27 April 2024</div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__point"></div>
            </div>
            <div className="timeline__component timeline__component--bg">
              <h2 className="timeline__title"></h2>
              <p className="timeline__paragraph">Pelaksanaan</p>
            </div>
            <div className="timeline__component timeline__component--bottom timeline__component--bg">
              <h2 className="timeline__title">Press Release</h2>
              <p className="timeline__paragraph"></p>
              <p className="timeline__paragraph"></p>
            </div>
            <div className="timeline__middle">
              <div className="timeline__point"></div>
              <div classn="timeline__point timeline__point--bottom"></div>
            </div>
            <div class="timeline__component timeline__component--bottom">
              <div class="timeline__date">28 April 2024</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Risbang100;
