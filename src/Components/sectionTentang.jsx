import React, { useState } from "react";
import "../Style/SectionTentang.css";
import { Link } from "react-router-dom";

function SectionTentang() {
  return (
    <div>
      <div className="div-tentang">
        <h2 className="tentang-h2">Struktur Ormawa Eksekutif PKU IPB</h2>
        <h4 className="tentang-h4">Kabinet Dirgantara Mahamimpi</h4>
        <div className="layer0-tentang">
          <Link to="/bphtentang"><img src="Images/BPH Awan.png"/></Link>
        </div>
        <div className="layer1-tentang">
          <Link to="/risbangtentang"><img src="Images/Risbang Awan.png" /></Link>
          <Link to="/akprestentang"><img src="Images/Akpres Awan.png" /></Link>
          <Link to="/adkesmahtentang"><img src="Images/Adkesmah Awan.png" /></Link>
          <Link to="/kastrattentang"><img src="Images/Kastrat Awan.png"/></Link>
          <Link to="/ekraftentang"><img src="Images/Ekraf Awan.png" /></Link>
          <Link to="/medbrandtentang"><img src="Images/Medbrand Awan.png" /></Link>
          <Link to="/peragatentang"><img src="Images/Peraga Awan.png" /></Link>
          <Link to="/internaltentang"><img src="Images/Internal Awan.png"/></Link>
          <Link to="/senbudtentang"><img src="Images/Senbud Awan.png" /></Link>
          <Link to="/slhtentang"><img src="Images/SLH Awan.png" /></Link>
          <Link to="/psdmtentang"><img src="Images/PSDM Awan.png" /></Link>
          <Link to="/serasitentang"><img src="Images/Serasi Awan.png"/></Link>
        </div>
      </div>
    </div>
  );
}

export default SectionTentang;
