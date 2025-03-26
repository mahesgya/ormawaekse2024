import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Creativity() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/EkrafDetail.png" alt="" className="detailImage" />
        <h1>Creativity</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
          Creativity salah satu program kerja Departemen Ekonomi Kreatif dengan mengikuti event besar yang diselenggarakan di dalam maupun di luar kampus IPB. Departemen Ekonomi Kreatif akan menjual produk dari Dirgantara Store maupun produk kreasi Departemen Ekonomi Kreatif sendiri dengan harapan dapat memperluas pasar sehingga dapat mewujudkan tujuan Creavity. 
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
          1. Memperluas branding bagi Ormawa Eksekutif PKU IPB ke ranah yang lebih luas. <br />
2. Menjadi wadah Mahasiswa PKU IPB untuk mengembangkan dan membantu bisnis KM PKU IPB. <br />
3. Menambah sasaran pasar bagi produk Dirgantara Store. <br />
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>5 Mei 2024 dan Juni 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Creativity;
