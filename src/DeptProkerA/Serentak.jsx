import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Serentak() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/KastratDetail.png" alt="" className="detailImage" />
        <h1>Serentak</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p></p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p></p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Serentak;
