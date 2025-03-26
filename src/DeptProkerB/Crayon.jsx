import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Crayon() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/PSDMDetail.png" alt="" className="detailImage" />
        <h1>Create a New Journey (CRAYON)</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            CRAYON merupakan salah satu program kerja berupa take video secara bebas yang sasarannya merupakan mahasiswa PKU. CRAYON berisi informasi dalam kehidupan sebagai mahasiswa untuk mencapai Sustainable Development Goals (SDGs).
            Tujuannya, mahasiswa dapat mengetahui lebih dalam dan dapat mengaplikasikan tips & trick yang diberikan di lingkungan kampus & sekitarnya.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. KM PKU IPB mengetahui cara mengembangkan diri yaitu softskill dan hardskill dengan informasi yang disosialisasikan.
            <br />
            2. KM PKU IPB mampu mengaplikasikan informasi yang diberikan dalam kehidupan sebagai mahasiswa untuk mencapai Sustainable Development Goals (SDGs).
            <br />
            3. KM PKU IPB mengetahui informasi seputar kegiatan pengembangan diri yang dapat diikuti guna meningkatkan kemampuan dalam mencapai Sustainable Development Goals (SDGs).
            <br />
            4. KM PKU IPB dapat mengaplikasikan tips dan trik yang dapat meningkatkan kemampuan softskill ataupun hardskill yang berguna dalam berkehidupan sebagai mahasiswa
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>Februari - September 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Crayon;
