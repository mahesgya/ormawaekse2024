import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function PCW() {
  return (
    <div>
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/AkpresDetail.png" alt="" className="detailImage" />
        <h1>Info Akpres</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            PKU Competition Week adalah program kerja yang bergerak di bidang pengembangan pengetahuan tentang kompetisi dan penyelenggaraan kompetisi di bidang akademik bagi seluruh Mahasiswa PKU IPB University angkatan 60. Kepanitiaan
            yang dibentuk dalam acara ini terdiri dari staf Departemen Akademik Prestasi Ormawa Eksekutif PKU IPB 2024. Kegiatan ini diadakan secara luring dengan rangkaian acara meliputi seminar pelatihan, kompetisi esai, dan Business
            Model Canvas yang akan diikuti oleh setiap perwakilan kelas Mahasiswa PKU IPB 2024 dengan mengirimkan delegasinya pada setiap cabang lomba. Melalui program kerja PKU Competition Week diharapkan memunculkan antusias dan semangat
            Mahasiswa PKU IPB untuk meningkatkan keterampilan, melatih kepercayaan diri, bersikap sportif, dan saling menghormati antar peserta sehingga upaya Departemen Akademik Prestasi Ormawa Eksekutif PKU IPB 2024 dalam mewadahi
            kebutuhan ruang berkembang Mahasiswa PKU IPB dapat terwujud.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>
            -Mengadakan perlombaan untuk meningkatkan semangat Mahasiswa PKU IPB dalam mengikuti perlombaan.
            <br />
            -Menambah pengetahuan serta mengasah kemampuan Mahasiswa PKU IPB di bidang perencanaan model bisnis.
            <br />
            -Menambah pengetahuan serta mengasah kemampuan Mahasiswa PKU IPB di bidang karya tulis ilmiah seperti esai.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
          <p>1 Februari - 2 Maret 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PCW;
