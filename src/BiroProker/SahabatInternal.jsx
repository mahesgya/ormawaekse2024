import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SahabatInternal() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/InternalDetail.png" alt="" className="detailImage" />
        <h1>Sahabat Internal</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Program yang dilaksanakan oleh setiap staf Biro Internal untuk ikut masuk kedalam biro/departemen. Staf yang berada di Biro /Departemen tersebut disebut batin. Dimana batin akan menjaga keselarasan dan keharmonisan komunikasi
            antar anggota dari dalam. Batin juga memiliki fungsi sebagai pendengar dan pemecah masalah ataupun konflik yang terjadi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Media laporan dari setiap sahabat internal dan masalah yang terjadi dari setiap biro/departemen, evaluasi, perencanaan ke depan terkait sahabat internal, serta program kerja yang akan dilaksanakan.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Penentuan Batin Biro/Departemen dan sosialisasi tupoksi </h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">1 Januari 2024 </div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">Januari - Oktober 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title"></h2>
            <p className="timeline__paragraph">Menjaga komunikasi dan keselarasan kabinet </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SahabatInternal;
