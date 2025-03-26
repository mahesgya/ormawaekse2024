import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SapaMaba() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/AdkesmahDetail.png" alt="" className="detailImage" />
      <h1>Sapa Maba</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>
        Sapa MABA! dan MPKMB berkolaborasi untuk menciptakan kesan pertama yang baik bagi mahasiswa angkatan baru yang akan memulai perjalanan di IPB University. Kegiatan ini diawali dengan membagikan link grup yang perlu dimasuki oleh mahasiswa baru untuk kemudian diberikan informasi lanjutan terkait kegiatan MPKMB dan perkuliahan. Program ini dilakukan dalam bentuk pendampingan kepada mahasiswa baru hingga perkuliahan dimulai.
        </p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>
        -Menciptakan kesan pertama yang baik bagi mahasiswa baru terhadap lingkungan IPB University.
<br />-Meningkatkan kesejahteraan mahasiswa baru melalui pendampingan hingga perkuliahan.
<br />-Menyediakan tempat untuk bertanya terkait kebingungan yang dirasakan mahasiswa baru. 
<br />-Mendukung adanya mahasiswa yang lebih siap menghadapi tahap PKU, melalui pendampingan lebih awal. 

        </p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Pelaksanaan: 26 Maret - 30 Agustus 2024</p>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default SapaMaba
