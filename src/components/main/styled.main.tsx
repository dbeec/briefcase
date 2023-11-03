import styled from 'styled-components';

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
  width: 50%;
  height: auto;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
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
  border-radius: 50%;
  border: 4px solid #222;
`;

export const PersonalInformation = styled.div`
  @media (max-width: 768px) {
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const H2 = styled.h2`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const TextPersonal = styled.p`
  @media (max-width: 768px) {
    margin-left: 10px;
    padding: 4px;
  }
`;