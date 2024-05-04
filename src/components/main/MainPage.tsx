import "./MainPage.css";
import * as IconFA from "react-icons/fa";
import Logo from "../../assets/Idev.svg";

export default function MainPage() {
  return (
    <>
      <main id="home" className="main">
        <div className="main__welcome__banner">
          <div className="main__welcome">
            <h1>hi there!</h1>
            <p>i'm johan díaz</p>
            <p>i'm a web developer</p>

            <div className="main__aboutme">
              <button>
                About me <IconFA.FaLongArrowAltDown />
              </button>
            </div>
          </div>

          {/* Blur */}
          <div className="filter__blur">
            <div className="blur__circle">
            </div>
            <div className="filter__blur__logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
