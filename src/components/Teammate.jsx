import { Link } from "react-router-dom";

export default function Teammate({image, name, cargo}) {
  return (
    <div className="teammate">
      <Link>
        <img src={image} alt={name} className="teammate-image" />
      </Link>
      <p className="name-teammate">{name}</p>
      <p className="cargo-teammate">{cargo}</p>
    </div>
  );
}
