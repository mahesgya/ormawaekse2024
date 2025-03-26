import React, { useState } from "react";
import "../Style/SectionProker.css";
import { Link } from "react-router-dom";

function SectionProker() {
  return (
    <div>
      <div className="div-proker">
        <h2 className="proker-h2">Program Kerja</h2>
        <div className="layer0-tentang">
          <Link to="/bphproker"><img src="Images/BPH Awan.png"/></Link>
        </div>
        <div className="layer1">
          <Link to="/risbangproker"><img src="Images/Risbang Awan.png" /></Link>
          <Link to="/akpresproker"><img src="Images/Akpres Awan.png" /></Link>
          <Link to="/adkesmahproker"><img src="Images/Adkesmah Awan.png" /></Link>
          <Link to="/kastratproker"><img src="Images/Kastrat Awan.png"/></Link>
          <Link to="/ekrafproker"><img src="Images/Ekraf Awan.png" /></Link>
          <Link to="/medbrandproker"><img src="Images/Medbrand Awan.png" /></Link>
          <Link to="/peragaproker"><img src="Images/Peraga Awan.png" /></Link>
          <Link to="/internalproker"><img src="Images/Internal Awan.png"/></Link>
          <Link to="/senbudproker"><img src="Images/Senbud Awan.png" /></Link>
          <Link to="/slhproker"><img src="Images/SLH Awan.png" /></Link>
          <Link to="/psdmproker"><img src="Images/PSDM Awan.png" /></Link>
          <Link to="/serasiproker"><img src="Images/Serasi Awan.png"/></Link>
        </div>
      </div>
    </div>
  );
}

export default SectionProker;
