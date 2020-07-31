import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ variant }) =>
    variant === "login" ? "transparent" : "#2660a4"};
  padding: 10px 40px;
  border:  1px solid #2660a4;
  border-radius: 5px;
  color: ${({ variant }) =>
    variant === "login" ? "#2660a4" : "#fff"};
  transition: all 0.3s ease-in-out;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    -webkit-box-shadow: rgba(101, 41, 255, 0.15) 0px 10px 20px;
    -moz-box-shadow: rgba(101, 41, 255, 0.15) 0px 10px 20px;
    box-shadow: rgba(101, 41, 255, 0.15) 0px 10px 20px;
    transform: translateY(-2px);
  }
`;

const LoginButton = ({ text = "Log in", variant }) => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant={variant} onClick={() => loginWithRedirect()}>{text}</Button>;
};

export default LoginButton;
