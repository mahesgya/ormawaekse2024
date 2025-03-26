import React from "react";
import "../Style/SectionStore.css";
import "../Style/sopStore.css";
import "../Style/Konveksi.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function Konveksi() {
  return (
    <div>
      <Navbar />
      <div className="store">
        <div className="storeA">
          <div className="store1">
            <img src="ImagesStore/LogoStores.png" />
          </div>
          <div className="store2">
            <h1 className="">Konveksi</h1>
          </div>
          {/* Terpisah */}
          <div className="store-Konveksi">
            <div>
              <h2 className="konveksi-h1">Pakaian</h2>
              <div className="pakaian-konveksi">
                <div>
                  <h3>Kaos</h3>
                  <img src="ImagesStore/Kaos.png" alt="" />
                </div>
                <div>
                  <h3>PDH/Kemeja Lapang/PDL</h3>
                  <img src="ImagesStore/PDHLapang.png" alt="" />
                </div>
                <div>
                  <h3>Jaket Coach/Parasut</h3>
                  <img src="ImagesStore/JaketCoachParasut.png" alt="" />
                </div>
                <div>
                  <h3>Totebag</h3>
                  <img src="ImagesStore/ToteBag.png" alt="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="konveksi-h1">Merchandise</h2>
              <div className="merchandise-konveksi">
                <div>
                  <h3>Lanyard</h3>
                  <img src="ImagesStore/Lanyard.png" alt="" />
                </div>
                <div>
                  <h3>Gantungan Kunci</h3>
                  <img src="ImagesStore/GantunganKunci.png" alt="" />
                </div>
                <div>
                  <h3>Topi Baseball</h3>
                  <img src="ImagesStore/TopiBaseball.png" alt="" />
                </div>
                <div>
                  <h3>Id Card PVC</h3>
                  <img src="ImagesStore/IdCardPVC.png" alt="" />
                </div>
              </div>
            </div>
            <div className="konveksi-tumbler">
              <h3>Tumbler</h3>
              <img src="ImagesStore/Tumbler.png" alt="" />
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

export default Konveksi;
