import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link> |{" "}
      <Link to="/presentation">Présentation</Link> |{" "}
      <Link to="/projet">Projet</Link> |{" "}
      <Link to="/album">Album</Link>
    </nav>
  );
}
