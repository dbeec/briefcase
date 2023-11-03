import {
  ContentMain,
  ContentProfilePic,
  H1,
  H2,
  MyProfile,
  PersonalInformation,
  Picture,
  ProfileMain,
  SocialNetworks,
  Span,
  TextPersonal,
} from "./styled.main";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const img1 = '/boruto.jpg';
const Main = () => {
  return (
    <>
      <ContentMain>

        <MyProfile>

          <ContentProfilePic>
            <ProfileMain>
              <Picture src={img1} alt="image"/>
            </ProfileMain>
          </ContentProfilePic>

          <PersonalInformation>
            <H1>Hello, <Span>I{"'"}m Johan</Span></H1>
            <H2>Developer Frontend Junior</H2>
            <TextPersonal>✈️ love travel to the world</TextPersonal>
            <TextPersonal>🏍️ i{"'"}ve a passion for motorcycles</TextPersonal>
            <TextPersonal>☕ coffe and more coffe</TextPersonal>
            <TextPersonal>💻 love with de code</TextPersonal>

            {/* iconos de mis redes sociales */}
            <SocialNetworks>
              <BiLogoFacebook />
              <BiLogoInstagram />
              <BiLogoGithub />
              <RiTwitterXFill />
              <FaLinkedinIn />
            </SocialNetworks>
          </PersonalInformation>

        </MyProfile>

      </ContentMain>
    </>
  );
};

export default Main;
