import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Style/ProkerSlide.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProkerSlide() {
  return (
    <div className="container-Slide">
      <h1>What's GOing On?!</h1>
      <Swiper
        grabCursor={true}
        navigation={{ clickable: true }}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper-Proker"
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
          <SwiperSlide className="Swiper-Proker">
          <Link to="NaraBersuara.pdf" target="_blank">
            <img src="ImagesProker/NaraBersuara.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to="/webris">
            <img src="ImagesProker/Webris.png" alt="" />
          </Link>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}

export default ProkerSlide;
