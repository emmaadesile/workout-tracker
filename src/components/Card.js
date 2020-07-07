import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 20.6rem;
  height: 12.5rem;
  background: ${({ background }) => (background ? background : "#fff")};
  border-radius: 10px;
  position: relative;
  padding: 1.25rem 2rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.20);
    transform: translateY(-0.5rem);
  }
`;

const Card = ({ children, background }) => (
  <StyledCard background={background}>{children}</StyledCard>
);
export default Card;
