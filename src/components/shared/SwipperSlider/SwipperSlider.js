import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import './style.css'

const SwiperSlider = ({ skillDatas }) => {

    const breakpoints = {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      };


  return (
    <Swiper
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      breakpoints={breakpoints}
    >
      <div>
        {skillDatas?.map((skill, index) => (
          <SwiperSlide className="flex flex-col"  key={index}>
            <img className="rounded " src={skill?.url} alt="images" />
            <p className="text-white mt-2 text-lg">{skill?.name}</p>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default SwiperSlider;
