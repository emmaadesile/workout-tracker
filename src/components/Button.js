import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  background: #2660a4;
  text-transform: uppercase;
  color: white;
`;

const Button = ({ name, type }) => (
  <StyledButton
    className="container border rounded-full mt-4 p-3 text-center"
    type={type}
  >
    {name}
  </StyledButton>
);

export default Button;
