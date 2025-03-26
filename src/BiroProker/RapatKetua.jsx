import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function RapatKetua() {
  return (
    <div className="Proker">
    <Navbar />
    <div className="detailProker">
      <img src="ImagesDetail/BPHDetail.png" alt="" className="detailImage" />
      <h1>Rapat Ketua</h1>
      <div className="detailDiv">
        <h3>Deskripsi</h3>
        <p>Rapat Ketua dilakukan dapat berbentuk secara daring maupun luring sesuai dengan keadaan yang meliputi pembahasan mengenai hal-hal yang berkaitan mengenai kabinet dan/atau biro/departemen.</p>
      </div>
      <div className="detailDiv">
        <h3>Tujuan</h3>
        <p>Terciptanya internalisasi yang baik dan para ketua Biro/Departemen mendapatkan pembelajaran yang lebih mengenai cara menjadi pemimpin dalam sebuah organisasi, sehingga dapat melaksanakan tugasnya dengan maksimal.</p>
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

export default RapatKetua

