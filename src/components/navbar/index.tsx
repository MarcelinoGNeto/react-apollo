import React, { useEffect, useState } from "react";
import { Nav, NavLink, MenuIcon, MobileMenu } from "./style";
import { Link } from "react-router-dom";

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
    <Nav>
      <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
      {isMobile === true ? (
        <MobileMenu open={isOpen}>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/locations">Locations</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
        </MobileMenu>
      ) : (
        <>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/locations">Locations</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
