import React, { useState } from "react";
import "../Style/Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <div className="footer-container">
        <ul className="footer-tambahan">
          <img src="Images/Logo Risbang.png" className="footer-logo" />
          <ul className="footer-kiri">
            <a className="footer-kiri2">DIKEMBANGKAN OLEH</a>
            <a className="footer-kiri1">BIRO RISET DAN PENGEMBANGAN</a> 
            <a className="footer-kiri3">ORMAWA EKSEKUTIF PKU IPB 2023/2024</a>
          </ul>
        </ul>
        <ul className="footer-tambahan2">
          <h3>HUBUNGI KAMI</h3>
          <a href="https://www.instagram.com/ormawaeksekutifpku/">
            <img src="Images/Instagram.png" className="footer-img"></img>
            <p className="footer-p">@ormawaeksekutifpku</p>
          </a>
          <a href="https://www.youtube.com/@ormawaeksekutifpkuipb">
            <img src="Images/Youtube.png" className="footer-img"></img>
            <p className="footer-p">Ormawa Eksekutif PKU IPB</p>
          </a>
          <a href="https://twitter.com/ormawaeksepku">
            <img src="Images/Twitter.png" className="footer-img"></img>
            <p className="footer-p">ormawaeksepku</p>
          </a>
          <a href="https://www.tiktok.com/@ormawaeksekutifpku">
            <img src="Images/Tiktok.png" className="footer-img"></img>
            <p className="footer-p">@ormawaeksekutifpku</p>
          </a>
          <a href="mailto:ormawaeksekutifppku@gmail.com">
            <img src="Images/Email.png" className="footer-img"></img>
            <p className="footer-p">eksekutiformawappku@gmail.com</p>
          </a>
          <a href="https://wa.me/6283804224866">
            <img src="Images/Telfon.png" className="footer-img"></img>
            <p className="footer-p">Syaban Shakti Jumantoro (083804224866)</p>
          </a>
          <a href="https://maps.app.goo.gl/2Rrtc4cujZ8DmcTo7">
            <img src="Images/Lokasi.png" className="footer-img"></img>
            <p className="footer-p">
              Jl. Raya Dramaga, Kampus IPB Dramaga Bogor, <br />
              16680, West Java, Indonesia
            </p>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
