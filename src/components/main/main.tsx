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
            <H1>Holaaaa, pvtooos!! 👋</H1>
            <H2>Im Frontend Developer Junior</H2>
            
            <TextPersonal>
              
            </TextPersonal>
          </PersonalInformation>
        </MyProfile>
      </ContentMain>
    </>
  );
};

export default Main;
