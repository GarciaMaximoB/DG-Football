// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Players } from "./Players";
import { Swiper, SwiperSlide } from "swiper/react";
import wyscoutLogo from "../assets/wyscout-logo.png";
import soccerwayLogo from "../assets/soccerway-logo.png";
import youtubeLogo from "../assets/youtube-logo.png";
import transferMktLogo from "../assets/transfermkt-logo.png";
import escudo from "../assets/escudo.png";
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
      speed={550}
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
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      <div
        className="swiper-button-next"
        style={customStyles.swiperButtonNext}
      ></div>
      {Players.map((player, index) => (
        <SwiperSlide key={index} virtualIndex={index} className="player">
          <img src={player.image} alt="" />
          <p>{player.name}</p>

          <div className="player-overlay">
            <img src={player.team} alt="" className="escudo" />
            <div className="player-social">
              <a href={player.redes.transferMarkt}>TransferMarket</a>
              <a href={player.redes.soccerWay}>soccerway</a>
              <a href={player.redes.Youtube}>youtube</a>
              <a href={player.redes.wyscout}>wyscout</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div
        className="swiper-button-prev"
        style={customStyles.swiperButtonPrev}
      ></div>
    </Swiper>
  );
}
