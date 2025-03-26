import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function DirgantaraStore() {
  return (
    <div>
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/EkrafDetail.png" alt="" className="detailImage" />
      <h1>Dirgantara Store</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>
        Program kerja yang membuat suatu toko usaha digital yang nantinya akan menjual barang dan jasa untuk memenuhi kebutuhan Biro/Departemen yang ada di Ormawa Eksekutif PKU IPB maupun untuk KM PKU IPB itu sendiri.
        </p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>
        1. Mempermudah dalam pengadaan barang dalam berbagai kegiatan Ormawa Eksekutif PKU IPB
<br />2. Melatih dan mengembangkan jiwa wirausaha anggota Departemen Ekonomi Kreatif
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

export default DirgantaraStore
