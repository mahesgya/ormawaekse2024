import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Digmacast() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/MedbrandDetail.png" alt="" className="detailImage" />
      <h1>Digmacast</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Berupa podcast dengan topik yang sesuai dengan kebutuhan KM PKU IPB dan menghadirkan narasumber yang relevan untuk topik yang akan dibahas.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Mahasiswa PKU IPB dapat mengetahui informasi yang diberikan dalam podcast dan sebagai sarana hiburan melalui media sosial YouTube dan Spotify.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Februari - September 2024</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default Digmacast
