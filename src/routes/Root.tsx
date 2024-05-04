import Aboutme from "../components/aboutme/Aboutme";
import Footer from "../components/footer/Footer";
import MainPage from "../components/main/MainPage";
import Navbar from "../components/navbar/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Aboutme />
      <Footer />
    </>
  );
}
