import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function InfoAkpres() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AkpresDetail.png" alt="" className="detailImage" />
        <h1>Info Akpres</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Info Akpres adalah sebuah program kerja yang memberikan informasi akademik terkini mengenai perlombaan (competition), magang (internship), dan sukarelawan (volunteer) yang ditujukan untuk Mahasiswa PKU IPB. Info Akpres akan
            diunggah secara aktual dan berkala melalui Instagram Departemen Akademik Prestasi. Informasi tersebut akan sampai dengan cepat dan tepat kepada Mahasiswa PKU IPB, sehingga Mahasiswa PKU IPB dapat mempersiapkan diri lebih lama
            dan baik lagi untuk dapat memperbesar peluang dalam meraih prestasi.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Menyebarluaskan informasi terkait kegiatan di bidang akademik maupun non akademik.
            <br />
            -Menyediakan wadah bagi Mahasiswa PKU IPB untuk menyalurkan minat dan bakat.
            <br />
            -Memberikan motivasi dan semangat kepada Mahasiswa PKU IPB untuk meningkatkan prestasi baik di bidang akademik maupun non akademik.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>15 Januari - 16 September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InfoAkpres;
