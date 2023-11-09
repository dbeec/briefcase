import {
  About,
  Button,
  ContentAbout,
  ContentPic,
  ContentText,
  Mytitle,
  Pic1,
  Pic2,
  Textme,
} from "./styled.about-me";

const Aboutme = () => {
  return (
    <>
      <ContentAbout id="about">
        <About>
          <ContentText>
            <Mytitle>Meet bee</Mytitle>
            <Textme>
              Hello there! I{"'"}m a junior frontend developer with a
              specialized focus on server management and configuration for ET
              Foundation. My professional focus is on optimizing server
              infrastructure and performance to efficiently support web
              applications and ensure availability and security of online
              services.
              <br />
              <br />
              My experience is based on deploying and administering web servers
              and databases, as well as configuring development and production
              environments. I have worked closely with front-end and back-end
              development teams to ensure seamless integration of applications
              into the server infrastructure, and have worked on continuously
              improving the scalability and security of systems.
              <br />
              <br />I{"'"}m committed to continue learning and keeping up with
              the latest trends and technologies in web servers and system
              administration to effectively contribute to the success of the ET
              Foundation and ensure that our services run smoothly and
              efficiently.
              <br />
              <br />
              [Text]
            </Textme>
            <Button>Resume</Button>
          </ContentText>

          <ContentPic>
            <Pic1>
              Photo 1
            </Pic1>
            <Pic2>
              Photo 2
            </Pic2>
          </ContentPic>
        </About>
      </ContentAbout>
    </>
  );
};

export default Aboutme;
