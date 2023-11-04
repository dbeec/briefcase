import styled from 'styled-components';
import Link from 'next/link'

export const ContentNavbar = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* .icon { */
    display: flex;
    align-items: center;
  }
`;