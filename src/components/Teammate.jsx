import { Link } from "react-router-dom";

export default function Teammate({image, name, cargo, onClick}) {
  return (
    <div className="teammate" onClick={onClick}>
      <Link>
        <img src={image} alt={`Foto de ${name}`} className="teammate-image" />
      </Link>
      <p className="name-teammate">{name}</p>
      <p className="cargo-teammate">{cargo}</p>
    </div>
  );
}
