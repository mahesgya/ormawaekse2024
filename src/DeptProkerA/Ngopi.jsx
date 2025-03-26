import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Ngopi() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/KastratDetail.png" alt="" className="detailImage" />
        <h1>
          NGOPI <br />
          (Ngobrol Perkara Isu)
        </h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Ngobrolin Perkara Isu (Ngopi) merupakan kegiatan diskusi antara moderator dengan narasumber yang berlangsung secara live melalui platform Instagram Departemen Kajian Aksi Strategis. Ngopi dilaksanakan selama empat bulan yang
            setiap bulannya diadakan sebanyak sekali. Kegiatan ini dapat ditonton oleh seluruh mahasiswa terutama Keluarga Mahasiswa Pendidikan Kompetensi Umum IPB.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Sebagai pembentukan sikap kritis mahasiswa agar mereka menggunakan akal sehat dan kemampuan berpikir analitis nya terhadap berita yang beredar di masyarakat dan dapat mengambil keputusan yang rasional berbasis informasi.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Maret-Juli 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ngopi;
