import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function M3() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SLHDetail.png" alt="" className="detailImage" />
        <h1>
          M3 <br />
          (Mahasiswa Membantu Masyarakat)
        </h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            M3 atau Mahasiswa Membantu Masyarakat merupakan sebuah kegiatan yang memiliki tujuan untuk memberikan pengalaman langsung kepada mahasiswa tentang kondisi nyata lingkungan di sekitar IPB, sehingga mereka dapat memahami secara
            mendalam tantangan yang dihadapi dan berkontribusi secara aktif dalam pencarian solusi yang berkelanjutan. Kegiatan ini terdiri atas 3 kegiatan utama, yaitu bagian pertama melakukan pembersihan di area sungai sekitar IPB, lalu
            bagian dua melakukan pembersihan dengan mengajak KM PKU IPB untuk turun bersama, lalu bagian puncak merupakan sebuah aksi sosial dimana kami menggalang dana untuk disumbangkan kepada desa yang membutuhkan.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Mengedukasi dan meningkatkan kesadaran Mahasiswa KM PKU IPB akan pentingnya pelestarian lingkungan di sekitar kampus serta dampak positif yang dapat dihasilkan dari upaya pelestarian lingkungan tersebut;
            <br />
            2. Memperluas pemahaman Mahasiswa KM PKU IPB tentang masalah-masalah sosial dan lingkungan hidup yang dihadapi oleh masyarakat sekitar, serta mengajak mereka untuk mencari solusi yang berkelanjutan;
            <br />
            3. Memberikan pengalaman langsung kepada mahasiswa tentang kondisi nyata lingkungan di sekitar IPB, sehingga mereka dapat memahami secara mendalam tantangan yang dihadapi dan berkontribusi secara aktif dalam pencarian solusi
            yang berkelanjutan.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Pelaksanaan M3 #1</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">3 Februari 2024</div>
          </div>
          {/* 1 */}
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">10 Maret 2024 - 28 April 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Rangkaian Pelaksanaan M3 #2</h2>
          </div>
          {/* 1 */}
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Rangkaian Pelaksanaan M3 Puncak</h2>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">25 Mei 2024 - 29 Juni 2024</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default M3;
