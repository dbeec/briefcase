import "./MainPage.css";
import * as IconFA from "react-icons/fa";
export default function MainPage() {
  return (
    <>
      <main className="main">
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
          <div className="main__banner">
            <h2>
              <span>i</span>dev
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
