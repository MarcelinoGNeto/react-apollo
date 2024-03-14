import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  max-width: 70%;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const Main = styled.main`
  max-width: 70%;
`;

export const Article = styled.article`
  margin: 32px 0;
`;

export const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: 8px;
  `;

export const H2 = styled.h1`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const P = styled.p`
  line-height: 1.4;
  padding: 8px 0;
`;

export const ImgDesktop = styled.div`
  display: flex;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const ImgMobile = styled.div`
  display: flex;

  @media (min-width: 769px) {
    display: none;
  }
`;
