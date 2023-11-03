import styled from 'styled-components';
import Link from 'next/link'

export const ContentNavbar = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: green; */


  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Nav = styled.nav`
  
`;

export const Ul = styled.ul`
  /* background: green; */
  display: flex;
  gap: 60px;
  list-style: none;
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 15px;
    align-items: center;
    font-weight: 400;
  }
`;

export const Li = styled.li`
  transition: all ease .3s;

  .brand {
    font-weight: 600;
    font-size: 2rem;
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
    .icon {
      display: none;
    }    
  }
`;