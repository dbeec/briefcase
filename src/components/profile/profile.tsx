import {
  ContentMain,
  ContentProfilePic,
  H1,
  P,
  MyProfile,
  PersonalInformation,
  Picture,
  ProfileMain,
  SocialNetworks,
  Span,
  TextPersonal
} from "./styled.profile";
import Link from 'next/link'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

// aqui exporto la imagen automaticamente de la carpeta public
const img1 = '/Me.jpg';

const Profile = () => {
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
            <H1>Hello, <Span>I{"'"}m beecodes</Span></H1>
            <P>Developer Frontend Junior</P>
            <TextPersonal>✈️ love travel to the world</TextPersonal>
            <TextPersonal>🏍️ i{"'"}ve a passion for motorcycles</TextPersonal>
            <TextPersonal>☕ coffe and more coffe</TextPersonal>
            <TextPersonal>💻 love with the code</TextPersonal>

            {/* iconos de mis redes sociales */}
            <SocialNetworks>
              <Link title='Facebook' href='https://www.facebook.com/alleeschmidt' target='_blank'>
              <BiLogoFacebook />
              </Link>

              <Link title='Instagram' href='https://www.instagram.com/dev.beecodes/' target='_blank'>
              <BiLogoInstagram />
              </Link>

              <Link title='GitHub' href='https://github.com/dbeec' target='_blank'>
              <BiLogoGithub />
              </Link>

              <Link title='Twitter' href='https://twitter.com/imjdiazq' target='_blank'>
              <RiTwitterXFill />
              </Link>

              <Link title='LinkedIn' href='https://www.linkedin.com/in/johan-d%C3%ADaz-ba83ab28b/' target='_blank'>
              <FaLinkedinIn />
              </Link>
            </SocialNetworks>
          </PersonalInformation>

        </MyProfile>

      </ContentMain>
    </>
  );
};

export default Profile;
