import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function Iconics() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/PSDMDetail.png" alt="" className="detailImage" />
        <h1>Integrated Community and Organization for IPB Common Class Society (ICONICS) i</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            ICONICS merupakan kegiatan memperkenalkan lebih dalam mengenai informasi UKM, Organisasi & komunitas dilingkungan IPB University melalui video clip yang berisi narasumber dari perwakilan UKM, Organisasi & Komunitas tersebut.
            Tujuannya adalah KM PKU IPB mengetahui organisasi ataupun komunitas yang dapat dijadikan sebagai tempat pengembangan diri.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            1. KM PKU IPB mengetahui organisasi ataupun komunitas yang dapat dijadikan sebagai tempat pengembangan diri.
            <br />
            2. KM PKU IPB memiliki pengetahuan tentang kegiatan yang dapat memberikan kebermanfaatan untuk pengembangan diri.
            <br />
            3. Organisasi dan komunitas mempunyai wadah untuk mempromosikan organisasi dan komunitasnya masing-masing.
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

export default Iconics;
