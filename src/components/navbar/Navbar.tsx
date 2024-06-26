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
            <a href="#skills">
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
            {/* discord */}
            <Link
              to={"https://discord.gg/Un47uUqCbU"}
              target="__blank"
              className="nav__iconcolors"
            >
              <IconBS.BsDiscord />
            </Link>

            {/* X */}
            <Link
              to={"https://twitter.com/imjdiazq"}
              target="__blank"
              className="nav__iconcolors"
            >
              <IconBS.BsTwitterX />
            </Link>

            {/* github */}
            <Link
              to={"https://github.com/dbeec"}
              target="__blank"
              className="nav__iconcolors"
            >
              <IconBS.BsGithub />
            </Link>

            {/* instagram */}
            <Link
              to={"https://www.instagram.com/johandiazq/"}
              target="__blank"
              className="nav__iconcolors"
            >
              <IconBS.BsInstagram />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
