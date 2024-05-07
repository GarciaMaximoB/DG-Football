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

export default function SliderPlayers() {
  return (
    <Swiper
      className="myCustomSwiper"
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      speed={500}
      spaceBetween={100}
      slidesPerView={3}
      navigation
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {Players.map((player, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <img src={player.image} alt="" />
          <p>{player.name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
