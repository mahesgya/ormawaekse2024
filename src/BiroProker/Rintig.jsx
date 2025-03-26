import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Rintig() {
  return (
    <div>
       <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/RisbangDetail.png" alt="" className="detailImage" />
        <h1>Rintig</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Riset yang dilakukan dengan mengangkat tema-tema unik disekitar PKU dan juga kejadian-kejadian yang terjadi pada bulan dilaksanakannya Riset. Program ini akan dilakukan setiap bulannya dalam 1 periode jabatan dalam bentuk wawancara, zoom ataupun survei Gform
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Menggali hal-hal unik yang terjadi disekitar masyarakat PKU ataupun dibulan-bulan tertentu</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Januari - September 2024</p>
        </div>
      
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Rintig
