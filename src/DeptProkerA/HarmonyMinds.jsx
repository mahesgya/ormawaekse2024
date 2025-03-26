import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function HarmonyMinds() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AdkesmahDetail.png" alt="" className="detailImage" />
        <h1>Harmony Minds</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            “Harmony Minds” merupakan program yang dirancang khusus untuk memberikan wadah yang nyaman bagi KM PKU untuk membahas isu-isu seputar kesehatan mental. Kegiatan ini menghadirkan kesempatan untuk ‘Face to Face’ di mana mahasiswa
            dapat berbagi pengalaman, mendengarkan cerita dari individu lain serta memperoleh informasi dan sumber daya yang berguna terkait kesehatan mental.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Mempromosikan kesejahteraan psikologis kepada masyarakat dan mahasiswa luas.
            <br />
            -Meningkatkan kesadaran dan pemahaman tentang kesehatan mental.
            <br />
            -Menyediakan ruang bagi KM PKU untuk berbicara terkait isu-isu kesehatan mental.
            <br />
            -Membantu mengurangi stigma masyarakat yang memandang permasalah mental merupakan masalah remeh.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Heal Ground</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">19-23 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">24 Februari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Face to face</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pelaksanaan</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">25 Februari 2024</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HarmonyMinds;
