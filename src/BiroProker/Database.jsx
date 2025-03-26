import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Database() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SerasiDetail.png" alt="" className="detailImage" />
        <h1>Database</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Database adalah sebuah program kerja yang berfungsi sebagai wadah pengumpulan, penyimpanan, dan pemusatan terkait data narahubung yang disediakan Ormawa Eksekutif PKU IPB Kabinet Dirgantara Mahamimpi untuk KM PKU IPB sebagai
            jembatan penghubung dan perwujudan kolaborasi dengan berbagai pihak demi memudahkan segala proses terkait pengajuan partnership, sponsorship, dan media partner.
            <br />
            Tema kegiatan ini adalah “Cooperation and Collaboration in Building an Effective and Strategic Networks”, makna dari tema ini adalah pentingnya membangun hubungan kerjasama dan kolaborasi dalam upaya membentuk jejaring yang
            efektif dan strategis dengan harapan untuk membuka pintu akan pertumbuhan bersama dan peluang baru. Sehingga, dapat memberikan output yang bersifat mutualisme antara Ormawa Ekskekutif PKU IPB dan pihak terkait.
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
            <h2 className="timeline__title">Penyusunan Database dan SOP</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">1 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">18 Februari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Release Database dan SOP</h2>
          </div>
          {/* 1 */}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Database;
