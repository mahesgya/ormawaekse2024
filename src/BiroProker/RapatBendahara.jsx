import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function RapatBendahara() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/BPHDetail.png" alt="" className="detailImage" />
      <h1>Rapat Bendahara</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Rapat Bendahara dilakukan dapat berbentuk secara daring maupun luring sesuai dengan keadaan yang meliputi pembahasan mengenai hal-hal penting dan mendesak yang berkaitan mengenai bidang perbendaharaan.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Terciptanya internalisasi yang baik dan para bendahara Biro/Departemen mendapatkan pembelajaran yang lebih, sehingga dapat melaksanakan tugasnya dengan maksimal.</p>
      </div>
      <div className="detailDiv">
        <h3>Timeline</h3>
        <p>Satu Kali Perbulan (Menyesuaikan)</p>
      </div>
     
    </div>
    <Footer />
  </div>
  )
}

export default RapatBendahara

