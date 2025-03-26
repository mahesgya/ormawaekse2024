import React from "react";
import "../Style/SectionStore.css";
import "../Style/sopStore.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Syarat() {
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
                <h4>Syarat dan Ketentuan Pesanan</h4>
              </span>
              <ul className="rincianSyarat">
                <li>Pemesanan hanya dapat dilakukan pada pukul 08.00-20.00.</li>
                <li>
                  Pemesanan dapat dilakukan dengan mengisi formulir pemesanan berikut: <br /> <a href="https://forms.gle/apeGsvSmF9Qf8KN47">https://forms.gle/apeGsvSmF9Qf8KN47</a>
                </li>
                <li>Perubahan (pengurangan atau penambahan) menu atau paket dikonfirmasikan sesuai waktu yang telah ditentukan.</li>
                <li>Pemesanan dianggap valid, jika disertai konfirmasi sesuai waktu yang telah ditentukan.</li>
                <li>Pembayaran tidak dapat dikembalikan apabila customer melakukan pembatalan</li>
                <li>Departemen Ekraf akan menghubungi pelanggan 2 (dua) hari sebelum masa pemesanan berakhir. Jika tidak ada balasan konfirmasi hingga pukul 21.00 pada H-2 maka pemesanan dibatalkan.</li>
                <li>Pesanan akan diantar ke tempat tujuan pada pukul yang sudah ditentukan oleh pelanggan.</li>
                <li>
                  Pemesan diwajibkan untuk mengisi formulir feedback pemesanan berikut: <br /> <a href="https://forms.gle/bdRJ8YcBggwwGBxS9 ">https://forms.gle/bdRJ8YcBggwwGBxS9 </a>
                </li>
              </ul>
            </div>
            <div className="store-sopC">
              <h3>Lanjut Baca : </h3>
              <Link to="/batas">
                <img src="ImagesStore/Panah.png" alt="" className="panahAsmara" />
                <h4>Batas Waktu Pemesanan</h4>
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

export default Syarat;
