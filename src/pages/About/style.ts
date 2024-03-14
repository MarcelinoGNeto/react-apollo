import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
    max-width: 600px;
`;

export const UserInfo = styled.section`
  text-align: center;
  padding: 16px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  font-size: 24px;
  padding: 16px;
`;

export const H3 = styled.h3`
  font-size: 22px;
  margin-bottom: 8px;
`;

export const TextContainer = styled.div`
  max-width: 80%;
`;

export const Text = styled.p`
  line-height: 1.2;
  padding: 4px 0;
`;

export const Section = styled.section`
  padding: 24px;
`;

export const XpContent = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #000;
  margin-bottom: 4px;
`;
