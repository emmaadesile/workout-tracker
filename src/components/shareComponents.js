import styled from "styled-components";
import { colors } from "../styles/theme";

const Container = styled.div`
  display: grid;
  place-items: center;
  place-items: center;
  height: 100vh;
  max-height: 500px;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1rem;
  color: ${colors.dark};
  font-weight: bold;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
`;

export { Container, StyledSpan, Title };
