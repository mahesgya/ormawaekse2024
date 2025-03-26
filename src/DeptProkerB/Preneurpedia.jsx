import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Preneurpedia() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/EkrafDetail.png" alt="" className="detailImage" />
        <h1>Preneurpedia</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Program media informatif mengenai kewirausahaan kreatif dikemas dengan berbagai cara yaitu berbentuk blog, video, podcast, dan lain lain.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
          1. Memberikan informasi terkait dunia Ekonomi Kreatif
<br />2. Meningkatkan pengetahuan KM PKU dalam bidang kewirausahaan kreatif
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Januari-Agustus</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Preneurpedia
