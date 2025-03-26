import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Internalisasi() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SerasiDetail.png" alt="" className="detailImage" />
        <h1>Humas 101</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Internalisasi dan Audiensi adalah sebuah program kerja bersifat pelayanan dan penunjang terkait kebutuhan biro dan departemen dalam Ormawa Eksekutif PKU IPB Kabinet Dirgantara Mahamimpi terkait bantuan birokrasi terkait
            partnership, sponsorship, narasumber, media partner dan guest star.
            <br />
            Tema kegiatan ini adalah “Bureaucracy and Communication is a Key of any Operation in this Generation”, makna dari tema ini adalah bahwa dalam era sekarang yang cenderung berjalan cepat dan menuntut perubahan masif dalam setiap
            kegiatannya komunikasi dan birokrasi yang baik tetap menjadi solusi utama dalam setiap permasalahan yang dihadapi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Menjadi fasilitator dengan pihak eksternal demi menunjang aktivitas dan kebutuhan Ormawa Eksekutif PKU IPB,
            <br />
            2. Membangun dan memelihara citra positif Ormawa Eksekutif PKU IPB agar tercipta hubungan baik dengan pihak eksternal.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pra-Internalisasi</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">2 Januari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">6 Januari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Finalisasi Data Pengajuan Bantuan Partnership</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Internalisasi</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">19-29 Februari 2024</div>
          </div>
          {/* 1 */}
        
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">Fleksibel</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Audiensi</h2>
          </div>
          {/* 1 */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Internalisasi;
