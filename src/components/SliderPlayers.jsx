import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
// import { Players } from "./Players";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "react-lazy-load-image-component/src/effects/blur.css";
const customStyles = {
  swiperButtonNext: {
    color: "#e7c4a2",
  },
  swiperButtonPrev: {
    color: "#e7c4a2",
  },
};

import { useState, useEffect } from "react";
import client, { urlFor } from "../sanityClient";

const PlayerSocialLinks = ({ player }) => {
  const { transfermarkt, soccerway, youtube, wyscout } = player;
  return (
    <div className="player-social">
      {transfermarkt && (
        <a href={transfermarkt} target="_blank" rel="noopener noreferrer">
          TransferMarkt
        </a>
      )}
      {soccerway && (
        <a href={soccerway} target="_blank" rel="noopener noreferrer">
          Soccerway
        </a>
      )}
      {youtube && (
        <a href={youtube} target="_blank" rel="noopener noreferrer">
          Youtube
        </a>
      )}
      {wyscout && (
        <a href={wyscout} target="_blank" rel="noopener noreferrer">
          Wyscout
        </a>
      )}
    </div>
  );
};

export default function SliderPlayers() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    client
      .fetch(
        '*[_type == "jugador"] | order(orden asc){orden, nombre, imagenJugador, imagenEscudo, soccerway, transfermarkt, youtube, wyscout}'
      )
      .then((data) => setJugadores(data))
      .catch(console.error);
  }, []);

  return (
    <Swiper
      className="myCustomSwiper"
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      speed={550}
      slidesPerView={2}
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
      {jugadores.map((jugador, index) => (
        <SwiperSlide key={index} virtualIndex={index} className="player">
          {jugador.imagenJugador && jugador.imagenJugador.asset && (
            <img
              src={urlFor(jugador.imagenJugador).url()}
              alt={jugador.nombre}
            />
          )}
          <p>{jugador.nombre}</p>
          <div className="player-overlay">
            {jugador.imagenEscudo && jugador.imagenEscudo.asset && (
              <img
                src={urlFor(jugador.imagenEscudo).url()}
                alt={jugador.nombre}
                className="escudo"
              />
            )}
            <PlayerSocialLinks player={jugador} />
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
