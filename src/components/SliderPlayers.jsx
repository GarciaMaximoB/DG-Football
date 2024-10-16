import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Players } from "./Players";
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

const PlayerSocialLinks = ({ player }) => {
  const { redes } = player;
  return (
    <div className="player-social">
      {redes.transferMarkt && (
        <a href={redes.transferMarkt} target="_blank" rel="noopener noreferrer">
          TransferMarkt
        </a>
      )}
      {redes.soccerWay && (
        <a href={redes.soccerWay} target="_blank" rel="noopener noreferrer">
          Soccerway
        </a>
      )}
      {redes.Youtube && (
        <a href={redes.Youtube} target="_blank" rel="noopener noreferrer">
          Youtube
        </a>
      )}
      {redes.wyscout && (
        <a href={redes.wyscout} target="_blank" rel="noopener noreferrer">
          Wyscout
        </a>
      )}
    </div>
  );
};

export default function SliderPlayers() {
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
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
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
      {Players.map((player, index) => (
        <SwiperSlide key={index} virtualIndex={index} className="player">
          <img src={player.image} alt={`Foto de ${player.name}`} className="player-image"/>
          <p>{player.name}</p>
          <div className="player-overlay">
            <img
              src={player.team}
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
