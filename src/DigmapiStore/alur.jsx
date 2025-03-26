import React from "react";
import "../Style/SectionStore.css";
import "../Style/sopStore.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Alur() {
  return (
    <div>
      <Navbar />
      <div className="store">
        <div className="storeA">
        <div className="store1">
            <img src="ImagesStore/LogoStores.png" />
          </div>
          <div className="store2">
            <h1>Dirgantara Store</h1>
          </div>
          {/* Terpisah */}
          <div className="store-sopA">
            <h2>sop</h2>
            <div className="store-sopB">
              <span className="rincianSOP">
                <img src="ImagesStore/Panah.png" alt="" className="panahAsmara" />
                <h4>Alur Pembayaran</h4>
              </span>
              <ul className="rincianAlur">
                <li>Pembayaran dibagi menjadi 2 untuk : </li> <br />
                <ul>
                  1. Internal Ormawa Eksekutif PKU
                  <li>Transfer melalui Bendahara Departemen Ekonomi Kreatif</li>
                  <li>Bendahara Departemen Ekonomi Kreatif Loren Narita Destenty Elshadai Pasaribu (wa.me/6285269068586).</li>
                </ul> <br />
                <ul>2. Diluar Ormawa Eksekutif PKU
                  <li>Transfer melalui Bendahara Dirgantara Store</li>
                  <li>Lusni (wa.me6285718042275)</li>
                </ul><br />
                <li>Pembayaran yang Anda pesan dapat dilakukan melalui kontak di atas. Apabila ada permintaan pembayaran mengatasnamakan kami selain pada kontak yang tertera, mohon untuk tidak melakukan pembayaran. Segala permintaan pembayaran yang Anda terima tanpa menggunakan rekening Bank di atas TIDAK BERASAL dari Departemen Ekonomi Kreatif</li>
              </ul>
            </div>
            <div className="store-sopC">
              <h3>Lanjut Baca : </h3>
              <Link to="/proses">
                <img src="ImagesStore/Panah.png" alt="" className="panahAsmara" />
                <h4>Proses Order</h4>
              </Link>
            </div>
          </div>

          {/* Terpisah */}
          <div className="store5">
            <div className="">
              <h2>Order Now</h2>
              <h4>Link :</h4>
              <a href="https://ipb.link/orderdirgantarastore">ipb.link/orderdirgantarastore</a>
            </div>
            <img src="Images/DipiPencarian.png" alt="" />
            <div className="">
              <h2>More :</h2>
              <div className="">
                <h4>Guidebook :</h4>
                <a href="">Guidebook Dirgantara Store</a>
                <h4>Contact Person :</h4>
                <a href="">
                  <img src="ImagesStore/Person.png" alt="" />
                  <p>Jabara Pilardi (081994262599)</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Alur;
