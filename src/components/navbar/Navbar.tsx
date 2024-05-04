import { Link } from "react-router-dom";
import * as IconBS from "react-icons/bs";
import * as IconIO5 from "react-icons/io5";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav__logo__search">
          <div className="nav__logo">
            <Link to={"/"} className="nav__link">
              <span>i</span>dev
            </Link>
          </div>
          <div className="nav__search">¡Buscador aquí!</div>
        </div>

        <div className="display">
          <div className="nav__list">
            <a href="#home">
              <span>home</span>
            </a>
            <a href="#aboutme">
              <span>about me</span>
            </a>
            <a href="/">
              <span>skills</span>
            </a>
            <a href="/">
              <span>experience</span>
            </a>
            <a href="/">
              <span className="nav__fweight">portafolio</span>
            </a>
          </div>

          <div className="nav__translate">
            <IconBS.BsTranslate />
          </div>

          <div className="nav__darkmode">
            <IconIO5.IoInvertMode />
          </div>

          <div className="nav__socialnetworks">
            <Link to={"https://discord.com"} className="nav__iconcolors">
              <IconBS.BsDiscord />
            </Link>
            <Link
              to={"https://twitter.com/?lang=es"}
              className="nav__iconcolors"
            >
              <IconBS.BsTwitterX />
            </Link>
            <Link to={"https://github.com"} className="nav__iconcolors">
              <IconBS.BsGithub />
            </Link>
            <Link to={"https://discord.com"} className="nav__iconcolors">
              <IconBS.BsInstagram />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
