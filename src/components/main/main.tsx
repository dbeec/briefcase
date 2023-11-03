import {
  ContentMain,
  ContentProfilePic,
  H1,
  H2,
  MyProfile,
  PersonalInformation,
  ProfileMain,
  TextPersonal,
} from "./styled.main";

const Main = () => {
  return (
    <>
      <ContentMain>
        <MyProfile>
          <ContentProfilePic>
            <ProfileMain>
              profile here
            </ProfileMain>
          </ContentProfilePic>

          <PersonalInformation>
            <H1>Hello, I{"'"}m Johan 💚💛</H1>
            <H2>Developer Frontend Junior</H2>
            <TextPersonal>✈️ love travel to the world</TextPersonal>
            <TextPersonal>🏍️ i{"'"}ve a passion for motorcycles</TextPersonal>
            <TextPersonal>☕ coffe and more coffe</TextPersonal>
            <TextPersonal>💻 love with de code</TextPersonal>
          </PersonalInformation>
        </MyProfile>
      </ContentMain>
    </>
  );
};

export default Main;
