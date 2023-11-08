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
  font-size: 3rem;
  color: #222;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Span = styled.span`
  background: #118333;
  background: -webkit-linear-gradient(to right, #B5AC49, #118333);
  background: linear-gradient(to right, #B5AC49, #118333);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const P = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #222;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TextPersonal = styled.p`
  color: #222;
  @media (max-width: 768px) {
    margin-left: 10px;
    padding: 4px;
  }
`;