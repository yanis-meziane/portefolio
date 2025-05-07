import { Link } from "react-router-dom";
import './CSS/header.css';

export default function Header() {
  return (
    <nav>
      <Link to="/" className="link">Accueil</Link> |{" "}
      <Link to="/presentation"  className="link">Présentation</Link> |{" "}
      <Link to="/projet"  className="link">Projet</Link> |{" "}
      <Link to="/album"  className="link">Album</Link>
    </nav>
  );
}
