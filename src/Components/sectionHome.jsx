import React, { useState } from "react";
import "../Style/SectionHome.css";
import PrestasiSlide from "./PrestasiSlide";
import ProkerSlide from "./ProkerSlide";

function SectionHome() {
  return (
    <div className="section-home">
      <div className="divangkasakan">
        <img className="imagesun" src="Images/Frame 2.png" />
      </div>
      <div className="AbroadDipi">
        <img src="Images/Abroad.png" />
      </div>
      <div className="divA-selayang">
        <h1>Selayang Pandang</h1>

        <div className="divB-selayang">
          <div className="divB-selayang-div">
            <h3 className="h3-selayang">Ormawa Eksekutif PKU IPB</h3>
            <p className="p-selayang">
              Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika
              yang dialami mahasiswa PKU IPB.
            </p>
          </div>
          <div className="line"></div>
          <div className="divB-selayang-div">
            <h3 className="h3-selayang">Peran Ormawa Eksekutif PKU IPB</h3>
            <p className="p-selayang">
              Perannya sangat signifikan dalam kehidupan kampus mahasiswa PKU, dengan pergerakan, pengembangan, pelayanan, dan pengabdian. Dengan demikian, organisasi ini bukan hanya berfungsi sebagai penanganan masalah, tetapi juga sebagai
              penggerak pengembangan dan kesejahteraan mahasiswa PKU IPB melalui berbagai kegiatan dan prgrgam yang dijalankan.
            </p>
          </div>
        </div>
      </div>
      <div className="divVektor">
        <div>
          <img src="Images/Logo Digmapi.png" className="logoDigmapi" />
        </div>
        <div>
          <h3 className="h3-vektor">Kabinet Dirgantara Mahamimpi</h3>
          <p className="p-vektor">
            “Dirgantara Mahamimpi” memiliki makna bahwasanya Ormawa Eksekutif PKU IPB 2023/2024 diharapkan dapat menjadi dunia dan wahana inspiratif bagi KM PKU IPB dalam mewujudkan karya-karya luar biasa yang berawal dari sebuah mimpi.
          </p>
        </div>
      </div>
      <div className="div-visi">
        <h3 className="h3-vektor">Visi</h3>
        <p className="p-vektor">Terwujudnya Ormawa Eksekutif PKU IPB yang menjunjung tinggi kebermanfaatan dengan berlandaskan kecintaan terhadap diversitas budaya serta memberikan kontribusi nyata untuk KM PKU IPB.</p>
      </div>
      <h3 className="h3-vektor">misi</h3>
      <div className="div-visimisi">
        <div>
          <li className="p-vektor">1. Aktualisasi lingkungan Ormawa Eksekutif PKU IPB yang mendukung inklusivitas, dalam internalisasi dan ekternalisasi.</li>
          <li className="p-vektor">2. Rejuvenasi fungsi pengembangan SDM yang dapat berpartisipasi secara menyeluruh.</li>
          <li className="p-vektor">3. Memanifestasikan nilai apresiasi terhadap diversitas budaya, dengan mewadahi diskusi interkultural dan kolaborasi lintas budaya.</li>
        </div>
        <div>
          <li className="p-vektor">4. Optimalisasi pencerdasan KM PKU IPB yang proaktif terhadap isu strategis dalam lingkup kampus, nasional, dan internasional.</li>
          <li className="p-vektor">5. Peningkatan produktivitas ekosistem berprestasi di lingkungan KM PKU IPB.</li>
          <li className="p-vektor">6. Melaksanakan 'Organizational Investment' demi terciptanya Ormawa Eksekutif yang berdaya saing tinggi.</li>
        </div>
      </div>
      <ProkerSlide />
      <PrestasiSlide />
    </div>
  );
}

export default SectionHome;
