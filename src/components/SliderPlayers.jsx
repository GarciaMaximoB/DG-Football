// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Players } from "./Players";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const customStyles = {
  swiperButtonNext: {
    color: "#e7c4a2", // Cambia el color de la flecha siguiente
  },
  swiperButtonPrev: {
    color: "#e7c4a2", // Cambia el color de la flecha anterior
  },
};

export default function SliderPlayers() {
  return (
    <Swiper
      className="myCustomSwiper"
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      speed={500}
      spaceBetween={100}
      slidesPerView={3}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
    >
      <div
        className="swiper-button-next"
        style={customStyles.swiperButtonNext}
      ></div>
      {Players.map((player, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <img src={player.image} alt="" />
          <p>{player.name}</p>
        </SwiperSlide>
      ))}
      <div
        className="swiper-button-prev"
        style={customStyles.swiperButtonPrev}
      ></div>
    </Swiper>
  );
}
