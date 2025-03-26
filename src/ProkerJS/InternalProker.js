import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/ProkerBiro.css";
import { Link } from "react-router-dom";

function InternalProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>BIRO INTERNAL</h2></div>
        <div className="BiroProker">
          <div className="prokerOnGoing">
            <img src="ImagesProker/Sahabat Internal.png" className="fotoProker" />
            <Link to="/sahabatinternal">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Rapot.png" className="fotoProker" />
            <Link to="/rapot">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Welcoming Party.png" className="fotoProker" />
            <Link to="/welcomingparty">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Bawa Mimpimu.png" className="fotoProker" />
            <Link to="/bawamimpimu">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Rapat Kabinet 2.png" className="fotoProker" alt="" />
            <Link to="/ligadigmapi">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Buka Bersama.png" className="fotoProker" />
            <Link to="/bukabersama">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Farewell Party.png" className="fotoProker" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InternalProker;
