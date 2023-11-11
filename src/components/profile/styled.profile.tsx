import styled from 'styled-components';

interface PictureProps {
  src: string;
  alt: string;
}

export const ContentMain = styled.div`
  /* background-color: #222; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  padding: 25px;
  gap: 20px;
`;

export const MyProfile = styled.div`
  /* background: #222; */
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
  }
`;

export const SocialNetworks = styled.div`
  /* background-color: red; */
  display: flex;
  width: 100%;
  font-size: 2rem;
  gap: 20px;
  margin-top: 20px;
  color: #222;
  
  @media (max-width: 768px) {
    /* background-color: red; */
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const ContentProfilePic = styled.div`
  
`;
export const ProfileMain = styled.div`
  background: #eee;
  display: flex; //eliminar estilo
  justify-content: center; //eliminar estilo
  align-items: center;  //eliminar estilo
  width: 250px;
  height: 250px;
  background: transparent;
  `;

export const Picture = styled.img<PictureProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  padding: 6px;
  /* box-sizing: border-box; */
  background: linear-gradient(#118333, #B5AC49);
  
`;

export const PersonalInformation = styled.div`
  @media (max-width: 768px) {
  }
`;

export const H1 = styled.h1`
  font-size: 4rem;
  color: #222;
  font-family: var(--font-karla);

  @media (max-width: 768px) {
    text-align: center;
    font-size: 3rem;
  }
`;

export const Span = styled.span`
  background: 50% 100%/50% 50% no-repeat radial-gradient(ellipse at bottom, #B5AC49, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* font-size: 10vw; */
  font-family: "Source Sans Pro", sans-serif;
  -webkit-animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;
  animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms;

  @-webkit-keyframes reveal {
  10% {
    letter-spacing: 0;
  }
  10% {
    background-size: 300% 300%;
  }
}
@keyframes reveal {
  10% {
    letter-spacing: 0;
  }
  100% {
    background-size: 300% 300%;
  }
}
@-webkit-keyframes glow {
  20% {
    text-shadow: 0 0 8px #11833390;
  }
}
@keyframes glow {
  5% {
    text-shadow: 0 0 8px #11833390;
  }
}
`;



export const P = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 5px;
  color: #222;
  font-family: var(--font-karla);
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TextPersonal = styled.p`
  color: #222;
  font-family: var(--font-karla);

  @media (max-width: 768px) {
    margin-left: 10px;
    padding: 4px;
  }
`;