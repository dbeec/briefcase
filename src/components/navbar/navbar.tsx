"use client";
import { Menu } from "./menu";
import { ContentNavbar, Li, Nav, Ul } from "./styled.navbar";
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <ContentNavbar>
        <Nav>
          <Ul>
            {Menu.map((item, index) => {
              return (
                <Li key={index}>
                  <Link href="/">
                    <i className="icon">{item.icon}</i>
                    <span className="title">{item.title}</span>
                    </Link>
                </Li>
              );
            })}
          </Ul>
        </Nav>
      </ContentNavbar>
    </>
  );
};

export default Navbar;
