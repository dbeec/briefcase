import "./Aboutme.css";
import * as IconFA from "react-icons/fa";
import Logo from "../../assets/Idev.svg";

export default function Aboutme() {
  return (
    <>
      <main id="aboutme" className="aboutme">
        <div className="aboutme__content">
          <div className="aboutme__logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="aboutme__text">
            <h1>About me</h1>

            <p>Soy un apasionado desarrollador web con una sólida formación en
              ingeniería informática y más de X años de experiencia en el desarrollo
              de aplicaciones web dinámicas y atractivas. Mi enfoque se centra en
              crear experiencias digitales impactantes y funcionales que resuelvan
              problemas y mejoren la vida de los usuarios.</p>

            <div className="btn__mission__vision">
              <button>Mission <IconFA.FaLongArrowAltDown /></button>
              <button>Vision <IconFA.FaLongArrowAltDown /></button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
