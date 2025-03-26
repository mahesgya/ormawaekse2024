import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function RapatBPH() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/BPHDetail.png" alt="" className="detailImage" />
        <h1>Rapat BPH</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>Rapat BPH dilakukan dapat berbentuk secara daring maupun luring sesuai dengan keadaan yang meliputi pembahasan hal-hal yang berkaitan mengenai kabinet.</p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Menghasilkan teknis yang matang dan menyiapkan segala kebutuhan yang berkaitan dengan Ormawa Eksekutif PKU IPB.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Menyesuaikan</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RapatBPH;
