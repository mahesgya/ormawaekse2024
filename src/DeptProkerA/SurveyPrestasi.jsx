import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function SurveyPrestasi() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AkpresDetail.png" alt="" className="detailImage" />
        <h1>Survey Prestasi</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Survey Prestasi adalah kegiatan yang bertujuan untuk memberikan apresiasi baik di bidang akademik maupun non akademik pada Mahasiswa PKU IPB angkatan 60 atas kontribusi yang sudah mereka berikan selama jenjang Pendidikan
            Kompetensi Umum. Kegiatan ini dilakukan dengan penyediaan google form untuk pendataan mahasiswa peraih prestasi dan apresiasi dalam bentuk pencantuman nama dalam konten prestasi Instagram.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Mengapresiasi mahasiswa yang memiliki prestasi
            <br />
            -Menumbuhkan semangat kompetitif bagi Mahasiswa PKU IPB untuk mendapatkan prestasi yang gemilang.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>4 Februari - 2 September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SurveyPrestasi;
