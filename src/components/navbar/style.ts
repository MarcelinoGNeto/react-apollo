import styled from "styled-components";

interface MobileMenuProps {
  open: boolean;
}

export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  height: 30px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuIcon = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    background-color: #333;
    padding-top: 10px;
    width: 100%;
  }
`;
