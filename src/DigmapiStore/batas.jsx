import React from "react";
import "../Style/SectionStore.css";
import "../Style/sopStore.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Batas() {
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
                <h4>Batas Waktu Pemesanan</h4>
              </span>
              <ul>
                <li>
                  1. Konveksi
                  <ul className="rincianBatas">
                    <li>Tenggat pemesanan : paling lambat h-10</li>
                    <li>Tenggat perubahan : h-7</li>
                    <li>Konfirmasi pesanan : 7 hari sebelum acara</li>
                  </ul>
                </li>
                <li>
        
              
                  2. Konsumsi
                  <ul className="rincianBatas">
                    <li>Tenggat Pemesanan: 3 (tiga) hari sebelum acara</li>
                    <li>Tenggat Perubahan Pesanan: 3 (tiga) hari sebelum acara</li>
                    <li>Konfirmasi Pemesanan: 2 (dua) hari sebelum acara</li>
                  </ul>
                </li>
                <li>
                 
                
                  3. Plakat
                  <ul className="rincianBatas">
                    <li>Tenggat pemesanan : paling lambat h-7 (khusus untuk plakat h-3)</li>
                    <li>Tenggat perubahan : h-3 ( sebelum naik produksi )</li>
                    <li>Konfirmasi pemesanan : 7 hari sebelum acara ( khusus plakat 3 hari sebelum acara)</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="store-sopC">
              <h3>Lanjut Baca : </h3>
              <Link to="/alur">
                <img src="ImagesStore/Panah.png" alt="" className="panahAsmara" />
                <h4>Alur Pembayaran</h4>
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

export default Batas;
