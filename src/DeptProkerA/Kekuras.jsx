import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Kekuras() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AdkesmahDetail.png" alt="" className="detailImage" />
        <h1>
          Kekuras <br /> (Kunjungan ke Ruang Kelas)
        </h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            “Kekuras” adalah program kerja yang berfokus untuk menyediakan wadah bagi aspirasi mahasiswa terkait pendidikan di tingkat PKU maupun fasilitas umum di IPB University. Kegiatan ini melibatkan Komti setiap kelas PKU untuk turut
            menyalurkan kritik, saran atau gagasan yang membangun lingkungan PKU kedepannya. Saran yang telah ditampung kemudian akan disalurkan kepada pihak DPKU IPB.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Menampung informasi terkait kritik, saran dan gagasan untuk peningkatan kesejahteraan lingkungan PKU.
            <br />
            -Menciptakan solusi yang adaptif terhadap permasalahan dan mengkomunikasikan dengan pihak-pihak yang terlibat.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <h4 className="timeline-h4">Bawa Mimpimu X Kekuras</h4>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pra-Bawa Mimpimu X Kekuras</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">10 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">17 Februari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Bawa Mimpimu X Kekuras</h2>
          </div>
        </div>
        <h4 className="timeline-h4">Kekuras 2</h4>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pendataan Peserta</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">2-5 September 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">7 September 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pelaksanaan</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kekuras;
