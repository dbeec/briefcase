"use client";
import { Menu } from "./menu";
import { ContentNavbar, Li, Linkk, Nav, Ul } from "./styled.navbar";

const Navbar = () => {
  return (
    <>
      <ContentNavbar>
        <Nav>
          <Ul>
            {Menu.map((item, index) => {
              return (
                <Li key={index}>
                  <Linkk href={item.url}>
                    <i className="icon">{item.icon}</i>
                    <span className={item.class}>{item.title}</span>
                    </Linkk>
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
