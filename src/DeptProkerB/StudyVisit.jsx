import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function StudyVisit() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/SLHDetail.png" alt="" className="detailImage" />
        <h1>Study Visit</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Study Visit merupakan Salah satu kegiatan Departemen Sosial Lingkungan Hidup untuk melakukan pembelajaran dengan berkunjung ke tempat Kementria Lingkungan dan Kehutanan yang ada di daerah bogor. Kegiatan ini bertujuan untuk
            meningkatan wawasan dan pengetahuan Departemen Sosial Lingkungan HIdup bersama KM PKU IPB dalam hal lingkungan hidup.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. Memperluas Wawasan dan Pengetahuan Departemen Sosial Lingkungan Hidup dan KM PKU tentang suatu topik tertentu. Kami akan memiliki kesempatan untuk belajar secara langsung dari praktik terbaik, teknologi terbaru, atau
            pendekatan inovatif yang dilakukan oleh lembaga atau organisasi yang dikunjungi.
            <br />
            2. Meningkatkan Keterampilan Praktis Misalnya, dalam kunjungan ke Kementrian Lingkungan Dan Kehutanan, Kita dapat belajar langsung tentang konservasi sumber daya Fauna yang terbaik.
            <br />
            3. Memperluas Jaringan dan Kolaborasi dengan lembaga atau organisasi yang dikunjungi. Hal ini dapat membuka pintu untuk kerjasama di masa depan, pertukaran pengetahuan, atau proyek bersama.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>20 April 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudyVisit;
