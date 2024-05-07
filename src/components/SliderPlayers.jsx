// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectCards } from "swiper/modules";
import { Players } from "./Players";
import imagePlayer from "../assets/Player-image.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

export default function SliderPlayers() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, EffectCards]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      //   effect="cards"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {Players.map((player, index) => (
        <SwiperSlide key={player} virtualIndex={index}>
          <img src={imagePlayer} alt="" />
          <p>{player.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
