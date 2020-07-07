import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 250px;
  height: 140px;
  background: ${({ color }) => (color ? color : "#fff")};
  border-radius: 10px;
  display: grid;
  place-items: center;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;
export default Card;
