import { ReactComponent as GithubIcon } from "assets/img/gh-logo.svg";
import { ReactComponent as Logo } from "assets/img/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="gwmovie-nav-content">
          <Link to="/">
            <h1>
              <Logo />
              GW Movie
            </h1>
          </Link>
          <a
            href="https://github.com/gabrielwenchenck"
            target="_blank"
            rel="noreferrer"
          >
            <div className="gwmovie-contact-container">
              <GithubIcon />
              <p className="gwmovie-contact-link">/gabrielwenchenck</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
