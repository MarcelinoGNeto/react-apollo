import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import { ChangeLanguage } from "../changeLang";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsMobile(() => {
      const currentWidth =
        typeof window !== "undefined" ? window.innerWidth : 0;
      return currentWidth < 769;
    });
  }, []);

  return (
    <S.Nav>
      <S.MenuIcon onClick={toggleMenu}>☰</S.MenuIcon>
      {isMobile === true ? (
        <S.MobileMenu open={isOpen}>
          <S.NavLink>
            <Link to="/">Home</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to="/locations">Locations</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to="/about">About</Link>
          </S.NavLink>
        </S.MobileMenu>
      ) : (
        <S.DesktopMenu>
          <S.NavLink>
            <Link to="/">Home</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to="/locations">Locations</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to="/about">About</Link>
          </S.NavLink>
          <S.NavLink>
            <ChangeLanguage />
          </S.NavLink>
        </S.DesktopMenu>
      )}
    </S.Nav>
  );
};

export default Navbar;
