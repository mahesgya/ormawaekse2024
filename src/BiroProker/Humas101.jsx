import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Humas101() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SerasiDetail.png" alt="" className="detailImage" />
        <h1>Humas 101</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Humas 101 adalah sebuah program kerja bersifat pelatihan terkait keilmuan mengenai komunikasi, negosiasi, dan kepenulisan untuk meningkatkan minat dan bakat Mahasiswa PKU IPB dalam bidang hubungan masyarakat. Dalam praktiknya
            Humas 101 terdiri dari kegiatan pelatihan penulisan pers dan perlombaan. <br />
            Tema kegiatan ini adalah “Crafting Connections: Elevating Public Relations Proficiency in The Digitak Frontier”, makna dari tema ini adalah pentingnya pendalaman kemampuan dan pengetahuan terkait komunikasi serta negosiasi
            sebagai upaya membangun jejaring sosial yang stabil dan strategis di tengah gempuran era digital dengan dinamika informasi yang berkembang cepat.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Pendalaman kemampuan dan pengetahuan tentang bagaimana menyusun strategi yang relevan, responsif, dan efektif di tengah dinamika informasi yang berkembang cepat.
            <br />
            2. Menciptakan wadah berkembang bagi KM PKU IPB yang memiliki ketertarikan lebih dalam bidang Public Relations.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Open Registration</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">25-29 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">2-4 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Perlombaan</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pengumpulan</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">5 Maret 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">6-7 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Penilaian</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pengumuman</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">8 Maret 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">9 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Hadiah dan Press Release</h2>
          </div>
          {/* 1 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Humas101;
