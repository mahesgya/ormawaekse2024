import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Style/PrestasiSlide.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function PrestasiSlide() {
  return (
    <div className="container-prestasi">
      <h1 className="heading">Prestasi KM PKU</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Adis2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Hisyam.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/IAAS WORLD.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Nasrul.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Nasrul2.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Nasrul3.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Nasrum.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Rafialy.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Vindati.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Abdillah Kelompok.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/dinara.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/dinda.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Abdillah.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/ichsan.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/PKU group.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/Rafi.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slideA">
          <img src="ImagesPrestasi/vania.jpg" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
export default PrestasiSlide;
