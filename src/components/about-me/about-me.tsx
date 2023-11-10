import {
  About,
  Button,
  ContentAbout,
  ContentPic,
  ContentText,
  Linki,
  Mytitle,
  Pic1,
  Pic2,
  Textme,
} from "./styled.about-me";
import Link from "next/link";

const image = '/1.png'
const Aboutme = () => {
  return (
    <>
      <ContentAbout id="about">
        <About>
          <ContentText>
            <Mytitle>Meet bee</Mytitle>
            <Textme>
              Hello there! I was born in Ocaña, Norte de Santander and grew up
              in Barranquilla, Atlántico. I learned that everyone has a story to
              tell and that it is important to be open to change and new ideas.
              <br />
              <br />
              Started in 2023 as a junior frontend developer with a specialized
              focus on server management and configuration for the{" "}
              <Linki href="https://etfundacion.org/" target="_blank">
                ET Foundation
              </Linki>
              . My professional focus is on optimizing server infrastructure and
              performance to efficiently support web applications and ensure
              availability and security of online services.
              <br />
              <br />
              My experience is based on deploying and administering web servers
              and databases, as well as configuring development and production
              environments. I have worked closely with front-end and back-end
              development teams to ensure seamless integration of applications
              into the server infrastructure, and have worked on continuously
              improving the scalability and security of systems.
              <br />
              <br />
              [Text]
            </Textme>
            <Link
              href="https://drive.google.com/file/d/1eO9-MQAI59XjfT6km0QwME61SQBjSlZj/view?usp=drive_link"
              target="_blank"
            >
              <Button>Resume</Button>
            </Link>
          </ContentText>

          <ContentPic>
            <Pic1>Photo 1</Pic1>
            <Pic2>Photo 2</Pic2>
          </ContentPic>
        </About>
      </ContentAbout>
    </>
  );
};

export default Aboutme;
