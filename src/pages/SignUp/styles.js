import styled from "styled-components";
import background from "../../assets/Background.jpg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center/cover;
  filter: brightness(0.7);
`;
