import styled from 'styled-components';
import Link from 'next/link'

// Permite pasar props a un componente sin advertensias
interface UlProps {
  click: boolean;
}

export const ContentNavbar = styled.div`
  height: 10vh;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  /* background: green; */


  @media (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const Nav = styled.nav`
  
`;

export const BurgerMenu = styled.div`
  font-size: 2rem;
  /* color: #fff; */
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    display: block;
    cursor: pointer;
    z-index: 2;

    &:hover {
      transition: all 3s ease-in-out;

    }
  }
`;

export const Ul = styled.ul<UlProps>`
  /* background: green; */
  display: flex;
  gap: 60px;
  list-style: none;
  font-size: 1.5rem; 
  font-weight: 300;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? 0 : '-100%')};
    bottom: 0;
    background-color: #222222f8;
    color: #eee;
    width: 50%;
    padding: 10px;
    display: block;
    z-index: 1;
    font-size: 1.2rem;
    font-weight: 400;
    transition: left 0.2s ease-in-out
  }
`;

export const Li = styled.li`
  transition: all ease .3s;

  @media (max-width: 768px) {
    position: relative;
    top: 8%;
  }

  .brand {
    font-weight: 800;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  &:hover {
    transform: translateY(-4px);
  }
`;

export const Linkk = styled(Link)`
  display: flex;
  gap: 10px;

  .icon {
    display: flex;
    align-items: center;
    
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .icon {
      display: flex;
      font-size: 25px;
    }    
  }
`;