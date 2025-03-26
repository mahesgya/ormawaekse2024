import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function RapatSekretaris() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/BPHDetail.png" alt="" className="detailImage" />
      <h1>Rapat Sekretaris</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Rapat Sekretaris dilakukan dapat berbentuk secara daring maupun luring sesuai dengan keadaan yang meliputi pembahasan mengenai hal-hal penting dan mendesak yang berkaitan mengenai bidang kesekretariatan.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Terciptanya internalisasi yang baik dan para sekretaris Biro/Departemen mendapatkan pembelajaran yang lebih mengenai bidang kesekretariatan, sehingga dapat melaksanakan tugasnya dengan maksimal.</p>
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

export default RapatSekretaris

