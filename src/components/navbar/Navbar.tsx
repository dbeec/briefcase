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
            <a href="#footer">
              <span>home</span>
            </a>
            <Link to={"https://vitejs.dev/config/"}>
              <span>about me</span>
            </Link>
            <Link to={"https://vitejs.dev/plugins/"}>
              <span>skills</span>
            </Link>
            <Link to={"/"}>
              <span>experience</span>
            </Link>
            <Link to={"/"}>
              <span className="nav__fweight">portafolio</span>
            </Link>
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
