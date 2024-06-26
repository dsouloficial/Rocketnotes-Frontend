import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;
