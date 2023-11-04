"use client";
import { Menu } from "./menu";
import { BurgerMenu, ContentNavbar, Li, Linkk, Nav, Ul } from "./styled.navbar";
import {HiOutlineMenu} from 'react-icons/hi'
import {useState} from 'react'

const Navbar = () => {
const [clickBurger, setClickBurger] = useState(false);
const handleBurger = () => {
  setClickBurger(!clickBurger)
}
  return (
    <>
      <ContentNavbar>
        <Nav>
          {/* menu de hamburguessa */}
          <BurgerMenu onClick={() => handleBurger()}>
          <HiOutlineMenu />
          </BurgerMenu>

          <Ul click={clickBurger}>
            {Menu.map((item, index) => {
              return (
                <Li key={index}>
                  <Linkk href={item.url} onClick={() => handleBurger()}>
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
