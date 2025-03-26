import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function AdvoBerbagi() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AdkesmahDetail.png" alt="" className="detailImage" />
        <h1>Advo Berbagi</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Advo Berbagi berupaya untuk lebih mengenal mahasiswa PKU dengan membagikan makanan ringan di sekitar lingkungan KM PKU. Diharapkan melalui kegiatan ini sedikitnya Departemen Advokasi Kesejahteraan Mahasiswa dapat memberikan
            support dan penyemangat secara langsung untuk kelancaran pembelajaran dan kegiatan mahasiswa.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Memberikan support dan penyemangat untuk kelancaran pembelajaran dan kegiatan mahasiswa.
            <br />
            -Meningkatkan pengetahuan departemen tentang lingkungan dan mahasiswa PKU secara langsung.
            <br />
            -Memperkuat rasa solidaritas diantara anggota KM PKU serta memupuk kesejahteraan mereka.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Advo Berbagi 1</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">14-15 Maret 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">6-7 Juni 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Advo Berbagi 2</h2>
          </div>
          {/* 1 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdvoBerbagi;
