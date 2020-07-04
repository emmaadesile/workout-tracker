import React from "react";
import styled from "styled-components";
import Logo from "../icons/logo";
import "../styles/main.css";

const StyledNav = styled.nav`
  height: 100px;
`;

const Nav = () => (
  <div>
    <StyledNav className="container mx-auto flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Logo />
      </div>
    </StyledNav>
  </div>
);

export default Nav;
