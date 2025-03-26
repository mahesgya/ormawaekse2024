import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function RelasiEvaluasi() {
  return (
    <div>
      <div>
        <Navbar />
        <div className="detailProker">
          <img src="ImagesDetail/SerasiDetail.png" alt="" className="detailImage" />
          <h1>Relasi Evaluasi</h1>
          <div className="detailDiv">
            <h3>Deskripsi</h3>
            <p>
              Relasi Evaluasi adalah sebuah program kerja yang memiliki fungsi utama dalam menciptakan, membangun, dan memelihara internalisasi yang baik antar Biro Kerjasama dan Relasi serta sebagai wadah evaluasi kinerja setiap anggota.
              <br />
              Tema kegiatan ini adalah “From Zero to Hero: Handling The Worst to Find The Best”, makna dari tema ini adalah pentingnya bagi kita untuk menjaga internalisasi yang baik dan saling membersamai antar sesama anggota serta selalu
              belajar dari kesalahan-kesalahan yang ada untuk menciptakan sesuatu yang besar di era yang akan datang.
            </p>
          </div>
          <div className="detailDiv">
            <h3>Tujuan</h3>
            <p>
              1. Meningkatkan dan memelihara internalisasi yang baik antar anggota dan pimpinan Biro Kerjasama dan Relasi;
              <br />
              2. Menciptakan wadah dan sarana evaluasi demi terbentuknya kinerja yang baik bagi Biro Kerjasama dan Relasi.
            </p>
          </div>
          <div className="detailDiv">
            <h3>Timeline</h3>
          </div>
          <div className="timeline">
            {/* 1 */}
            <div className="timeline__component timeline__component--bg">
              <h2 className="timeline__title">Evaluasi Biro</h2>
            </div>
            <div className="timeline__middle">
              <div className="timeline__point"></div>
            </div>
            <div className="timeline__component">
              <div className="timeline__date">Akhir Minggu Ke-4 Setiap Bulan</div>
            </div>
            {/* 1 */}
            <div className="timeline__component">
              <div className="timeline__date timeline__date--right">Jika Diperlukan</div>
            </div>
            <div className="timeline__middle">
              <div className="timeline__point"></div>
            </div>
            <div className="timeline__component timeline__component--bg">
              <h2 className="timeline__title">Evaluasi Pribadi</h2>
            </div>
            {/* 1 */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RelasiEvaluasi;
