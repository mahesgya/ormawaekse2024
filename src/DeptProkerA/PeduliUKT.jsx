import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function PeduliUKT() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AdkesmahDetail.png" alt="" className="detailImage" />
        <h1>Peduli UKT</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            “Peduli UKT” merupakan program bantuan keringanan dana bagi mahasiswa aktif yang terkendala finansial dalam pembayaran UKT/SPP, program ini bukan bagian dari jenis beasiswa. Peduli UKT dapat berupa pinjaman atau pun hibah yang
            akan diberikan kepada pendaftar yang memenuhi persyaratan. Sumber pendanaan dari kegiatan ini berasal dari kegiatan GEMARI 'Gerakan Lima ribu' dan kerjasama beberapa instansi terkait.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Menjalankan fungsi advokasi pada bidang finansial mahasiswa.
            <br />-Mendukung pendidikan KM PKU dengan memberikan bantuan dana UKT.
            <br />-Menunjukan peran Ormawa Eksekutif PKU IPB dalam mendukung dan memfasilitasi bantuan pendidikan KM PKU.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <h4 className="timeline-h4">Peduli UKT 1</h4>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Open Portal Peduli UKT 1</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">28 Desember - 5 Januari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">6 Januari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pemberian Bantuan</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Press Release</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">7 Januari 2024</div>
          </div>
          {/* 1 */}
        </div>
        <h4 className="timeline-h4">Peduli UKT 2</h4>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Open Portal Peduli UKT 2</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">1 April - 12 juli 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">6 Januari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Penyuluhan Gerakan Lima Ribu 'GEMARI'</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pemberian Bantuan</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">13-15 Juli 2024</div>
          </div>
          {/* 1 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PeduliUKT;
