import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function BisikBerisi() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SLHDetail.png" alt="" className="detailImage" />
        <h1>Bisik Berisi</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Bisik Berisi merupakan sebuah media kegiatan yang memiliki tujuan untuk memberikan informasi dan insight menarik dari berbagai sudut pandang mengenai isu sosial lingkungan yang sedang terjadi. Tujuan kegiatan ini ialah untuk
            menyebarluaskan informasi tak hanya kepada Mahasiswa KM PKU IPB secara khusus, namun kepada masyarakat yang menggunakan media sosial.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1.Meningkatkan kesadaran mahasiswa terhadap isu-isu sosial dan lingkungan hidup yang sedang terjadi. Den gan pemahaman yang lebih baik tentang masalah-masalah ini, diharapkan mahasiswa akan menjadi lebih peduli dan aktif dalam
            upaya penyelesaiannya.
            <br />
            2. Menyediakan informasi yang relevan dan terbaru tentang tantangan-tantangan sosial dan lingkungan hidup.
            <br />
            3. Mengedukasi melalui media sosial sebagai platform untuk edukasi. Dengan memanfaatkan konten yang menarik dan mudah dipahami, diharapkan pesan-pesan tentang kepedulian sosial dan lingkungan dapat tersebar luas dan efektif.
            <br />
            4. Mendorong mahasiswa agar mengambil tindakan nyata. Hal ini dapat mencakup partisipasi dalam kegiatan sosial, pengurangan jejak lingkungan, atau mendukung inisiatif lokal yang bertujuan untuk meningkatkan kesejahteraan sosial
            dan lingkungan.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>20 Februari -20 September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BisikBerisi;
