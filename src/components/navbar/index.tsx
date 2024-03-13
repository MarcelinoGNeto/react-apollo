import React, { useEffect, useState } from "react";
import { Nav, NavLink, MenuIcon, MobileMenu } from "./style";

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
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Locations</NavLink>
          <NavLink href="#">About</NavLink>
        </MobileMenu>
      ) : (
        <>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Locations</NavLink>
          <NavLink href="#">About</NavLink>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
