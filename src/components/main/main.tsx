import Aboutme from "../about-me/about-me";
import Profile from "../profile/profile";
import { RenderAllComponents } from "./styled.main";

const Main = () => {
  return (
    <>
      <RenderAllComponents>
        {/* Componente de perfil, pagina home! */}
        <Profile />

        {/* Componente de perfil, pagina about me! */}
        <Aboutme />
      </RenderAllComponents>
    </>
  );
};

export default Main;
