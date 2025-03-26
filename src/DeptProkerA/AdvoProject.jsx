import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function AdvoProject() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AdkesmahDetail.png" alt="" className="detailImage" />
        <h1>Advo Project </h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Kebutuhan informasi secara akurat dan cepat menjadi salah satu fungsi Departemen Advokasi Kesejahteraan Mahasiswa. Terdapat dua subproker, yaitu Advo Info dan Advo Care dengan fungsi utama untuk menyebarkan informasi ter-update
            seputar lingkungan KM PKU.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Menyediakan informasi update seputar lingkungan PKU.
            <br />-Meningkatkan kemampuan KM PKU dalam literasi digital.
            <br />-Memberikan support yang diperlukan mahasiswa agar tetap maksimal dalam pembelajaran.
            <br />-Memfasilitasi KM PKU dalam bidang kesehatan mental.
            <br />-Berupaya menjadi yang terdepan untuk membantu KM PKU dalam bidang pendidikan, finansial, dan kesehatan mental.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Januari-September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdvoProject;
