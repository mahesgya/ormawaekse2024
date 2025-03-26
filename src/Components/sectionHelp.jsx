import React, { useState } from "react";
import "../Style/DigmapiHelp.css";

function SectionHelp() {
  return (
    <div className="digmapiHelp">
      <img src="/Images/DigmapiHelp.png" className="digmapiFoto" />
      <div className="divHelp1">
        <div className="divDipi">
          <h1>DIGMAPI HELP</h1>
          <p>
            Menu DIGMAPI HELP merupakan program kerja gabungan antara Biro Riset Pengembangan dengan Departemen Advokasi Kesejahteraan Mahasiswa Ormawa Eksekutif PKU IPB sebagai tempat menampung berbagai keluhan mahasiswa PKU IPB. Jadi buat
            kalian yang memiliki keluhan baik di bidang akademik dan non-akademik, pelayanan, sarana dan prasarana maupun finansial bisa menyampaikan keluhan kalian di laman ini!
          </p>
          <a href="https://ipb.link/haloo-mincare?fbclid=PAZXh0bgNhZW0BMQABpjPbHfJ1oTIEion4PKsU7KmBrbvWG5JB4ZhPFhsvsorBP34a_BhII1TOKA_aem_ATlZIXrL7d9vQkeiVCbEBQOAR5mkw6KGb3_zuuu5r4WpTtTqX0I6Qi7bR1BvJwnj-qg "><button className="button1">About Us</button></a>
        </div>
        <img src="/Images/DipiPencarian.png" />
      </div>
    
    </div>
  );
}

export default SectionHelp;
