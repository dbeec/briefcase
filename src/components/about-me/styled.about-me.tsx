import styled from "styled-components";
import Link from 'next/link'

export const ContentAbout = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const About = styled.div`
  /* background-color: green; */
  display: flex;
  width: 70%;
  height: 100%;
  gap: 5rem;
  padding: 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    height: 100%;
  }
`;

export const ContentText = styled.div`
  width: 90%;
  height: auto;
  /* background-color: red; */
`;

export const Mytitle = styled.h1`
  margin-bottom: 15px;
  font-family: var(--font-ptserif);
  font-size: 4rem;
  color: #444;
`;


export const Textme = styled.p`
  line-height: 2;
  font-family: var(--font-karla);
  color: #444;
`;

export const Span = styled.span`

`;

export const Button = styled.button`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 30px;
  font-size: 16px;
  background-color: #3498db;
  color: #B5AC49;

  background: transparent;
  border: 2px solid #B5AC49;

  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #B5AC49; /* Cambia el color de fondo al pasar el ratón */
    color: #fff;
  }

  &:active {
    background-color: #79722f; /* Cambia el color de fondo al hacer clic */
  }
`;


export const ContentPic = styled.div`
  width: 100%;
  height: auto;
  /* background: #000; */
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media (max-width: 768px) {
    height: 300px;
  } */
`;

export const Pic1 = styled.div`
  width: 290px;
  height: 400px;
  background-color: #eee;
  transform: rotate(-20deg);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 320px;
    height: 250px;
  }
  `;

export const Pic2 = styled.div`
  position: relative;
  width: 290px;
  height: 400px;
  background-color: #eee;
  left: -50px;
  transform: rotate(20deg);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 320px;
    height: 250px;
  }
`;

export const Linki = styled(Link)`
    border-style: dotted;
    font-weight: 700;
    border-color: transparent transparent rgba(92, 92, 92, 0.342);
    border-width: 1px 1px 2px;
    color: rgba(92, 92, 92, 0.904);
`;