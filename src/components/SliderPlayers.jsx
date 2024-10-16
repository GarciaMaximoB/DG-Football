import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Players } from "./Players";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect, useState } from "react";
import { fetchPlayers } from "../contentfulClient";
const customStyles = {
  swiperButtonNext: {
    color: "#e7c4a2",
  },
  swiperButtonPrev: {
    color: "#e7c4a2",
  },
};

const PlayerSocialLinks = ({ player }) => {
  const { fields } = player;
  return (
    <div className="player-social">
      {fields.transferMarkt && (
        <a
          href={fields.transferMarkt}
          target="_blank"
          rel="noopener noreferrer"
        >
          TransferMarkt
        </a>
      )}
      {fields.soccerway && (
        <a href={fields.soccerway} target="_blank" rel="noopener noreferrer">
          Soccerway
        </a>
      )}
      {fields.youtube && (
        <a href={fields.youtube} target="_blank" rel="noopener noreferrer">
          Youtube
        </a>
      )}
      {fields.wyscout && (
        <a href={fields.wyscout} target="_blank" rel="noopener noreferrer">
          Wyscout
        </a>
      )}
    </div>
  );
};

export default function SliderPlayers() {
  const [players, setPlayers] = useState([]);

  console.log(window.innerWidth);

  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };
    getPlayers();
  }, []);
  // const [jugadores, setJugadores] = useState([]);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       '*[_type == "jugador"] | order(orden asc){orden, nombre, imagenJugador, imagenEscudo, soccerway, transfermarkt, youtube, wyscout}'
  //     )
  //     .then((data) => setJugadores(data))
  //     .catch(console.error);
  // }, []);

  return (
    // <Swiper spaceBetween={50} slidesPerView={3}>
    //   {players.map((player) => (
    //     <SwiperSlide key={player.sys.id}>
    //       <div>
    //         <h2>{player.fields.nombre}</h2>
    //         <img
    //           src={player.fields.imagen.fields.file.url}
    //           alt={player.fields.nombre}
    //           style={{ width: "100%" }}
    //         />
    //         <p>{player.fields.position}</p>
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <Swiper
      className="myCustomSwiper"
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      speed={550}
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
          spaceBetween: 100,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      }}
      centeredSlides={true}
      watchSlidesProgress={true}
      watchSlidesVisibility={true}
      observer={true} // Activa la observación de cambios en Swiper
      observeParents={true} // Observa cambios en el contenedor de Swiper
      resizeObserver={true}
    >
      <div
        className="swiper-button-next"
        style={customStyles.swiperButtonNext}
      ></div>
      {players.map((player, index) => (
        <SwiperSlide key={index} virtualIndex={index} className="player">
          <img
            src={player.fields.imagen.fields.file.url}
            alt={`Foto de ${player.fields.nombre}`}
            className="player-image"
          />
          <p>{player.fields.nombre}</p>
          <div className="player-overlay">
            <img
              src={player.fields.escudo.fields.file.url}
              alt={`Escudo de ${player.team}`}
              className="escudo"
            />
            <PlayerSocialLinks player={player} />
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
