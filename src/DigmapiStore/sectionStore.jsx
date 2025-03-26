import React from "react";
import "../Style/SectionStore.css";
import { Link } from "react-router-dom";
function SectionStore() {
  return (
    <div className="store">
      <div className="store1">
        <img src="ImagesStore/LogoStores.png" />
      </div>
      <div className="storeA">
        <div className="store2">
          <h1>Welcome to Dirgantara Store!</h1>
          <div className="store2-A">
            <div className="">
              <a  className="storeMenu">
                <img src="ImagesStore/Sop.png" alt="" />
                <h4>SOP</h4>
              </a>
            </div>
            <div className="">
              <a  className="storeMenu">
                <img src="ImagesStore/PriceList.png" alt="" />
                <h4>PriceList</h4>
              </a>
            </div>
            <div className="">
              <a className="storeMenu">
                <img src="ImagesStore/OrderNow.png" alt="" />
                <h4>Order Now</h4>
              </a>
            </div>
            <div className="">
              <a  className="storeMenu">
                <img src="ImagesStore/Pembayaran.png" alt="" />
                <h4>Pembayaran</h4>
              </a>
            </div>
            <div className="">
              <a  className="storeMenu">
                <img src="ImagesStore/FeedBack.png" alt="" />
                <h4>Feedback</h4>
              </a>
            </div>
            <div className="">
              <a  className="storeMenu">
                <img src="ImagesStore/More.png" alt="" />
                <h4>More</h4>
              </a>
            </div>
          </div>
          <div className="store2-B">
            <h2>SOP</h2>
            <div className="store2-B1">
              <div className="">
                <Link to="/syarat">
                  <img src="ImagesStore/Panah.png" alt="" className="panahAsmara"/>
                  <p>Syarat dan Ketentuan Pemesanan</p>
                </Link>
              </div>
              <div className="">
                <Link to="/alur">
                  <img src="ImagesStore/Panah.png" alt="" className="panahAsmara"/>
                  <p>Alur Pembayaran</p>
                </Link>
              </div>
              <div className="">
                <Link to="/batas">
                  <img src="ImagesStore/Panah.png" alt="" className="panahAsmara"/>
                  <p>Batas Waktu Pemesanan</p>
                </Link>
              </div>
              <div className="">
                <Link to="/proses">
                  <img src="ImagesStore/Panah.png" alt="" className="panahAsmara"/>
                  <p>Proses Order</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="store3">
          <h2>
            Price <br /> List
          </h2>
          <div className="">
            <Link to="/konveksi">
              <img src="ImagesStore/Konveksi.png" alt="" />
            </Link>
            <a href="https://ipb.link/katalog-reklame-dirgantarastore">
              <img src="ImagesStore/Reklame.png" alt="" />
            </a>
            <a href="https://drive.google.com/file/d/1YwGBgGHyJKhy_G6iJ4T4npO4zx4jI7bo/view?usp=drive_link">
              <img src="ImagesStore/Konsumsi.png" alt="" />
            </a>
          </div>
        </div>
        <div className="store4">
          <div className="store4-A">
            <h2>Konfirmasi Pembayaran</h2>
            <div className="store4-A1">
              <div>
                <h3>Untuk Internal Ormawa Eksekutif PKU</h3>
                <div className="store4-Detail">
                  <a href="https://wa.me/6285269068586">
                  <img src="ImagesStore/Person.png" alt="" className="khusus-person"/>
                    <p>Bendaraha Departemen ekonomi Kreatif a.n. Loren Narita Destenty Elshadai Pasaribu</p>
                  </a>
                </div>
              </div>
              <div>
                <h3>Untuk di Luar Ormawa Eksekutif PKU</h3>
                <div className="store4-Detail">
                  <a href="https://wa.me/6285718042275">
                  <img src="ImagesStore/Person.png" alt="" className="khusus-person"/>
                    <p>Bendaraha Dirgantara Store a.n. Lusni</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="store4-B">
            <h2>Give Me Your Feedback Here!</h2>
            <div className="">
              <h3>Link Feedback :</h3>
              <a href="https://ipb.link/feedbackdirgantarastore">ipb.link/feedbackdirgantarastore </a>
            </div>
          </div>
        </div>
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
              <a href="https://drive.google.com/file/d/1PQmPGos6wMwGCDFXOl4UAznA0-b79qKr/view?usp=drive_link">Guidebook Dirgantara Store</a>
              <h4>Contact Person :</h4>
              <a href="https://wa.me/6281994262599">
                <img src="ImagesStore/Person.png" alt="" className="khusus-person"/>
                <p>Jabara Pilardi (081994262599)</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionStore;
