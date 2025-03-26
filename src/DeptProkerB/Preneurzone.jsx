import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Preneurzone() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/EkrafDetail.png" alt="" className="detailImage" />
        <h1>Preneurzone</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Preneurzone Adalah program inovatif dari Departemen Ekonomi Kreatif Ormawa Eksekutif PKU, yang bertujuan memperluas daya tarik dan jangkauan promosi bisnis mahasiswa PKU. Program ini diarahkan untuk memberikan dukungan yang
            komprehensif, menjelajahi peluang pemasaran yang luas agar bisnis mahasiswa dapat lebih bersinar di lingkungan IPB University.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Membantu memperluas promosi bisnis yang dimiliki oleh mahasiswa PKU
            <br />
            2. Menginspirasi semangat berbisnis bagi mahasiswa PKU untuk tumbuh dan berkembang.
            <br />
            3. ⁠Menyampaikan konsep bisnis modern kepada mahasiswa PKU dengan pendekatan yang menarik dan relevan dengan era saat ini.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Januari-Agustus</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Preneurzone;
