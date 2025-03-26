import React from "react";
import "../Style/SectionStore.css";
import "../Style/sopStore.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Proses() {
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
                <h4>Proses Order</h4>
              </span>
              <ul className="rincianSyarat">
                <li>Tentukan dan pastikan terlebih dahulu produk yang diinginkan.</li>
                <li>Isi formulir pemesanan Dirgantara Store.</li>
                <li>Kirim bukti pembayaran kepada Bendahara Departemen Ekraf.</li>
                <li>Departemen Ekraf akan mengkonfirmasi sesuai waktu yang telah ditentukan kepada pelanggan atas pemesanan.</li>
              </ul>
            </div>
            <div className="store-sopC">
              <h3>Lanjut Baca : </h3>
              <Link to="/digmapistore">
                <img src="ImagesStore/Panah.png" alt="" className="panahAsmara" />
                <h4>Kembali ke Halaman Utama</h4>
              </Link>
            </div>
          </div>

          {/* Terpisah */}
          <div className="store5 ">
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

export default Proses;
