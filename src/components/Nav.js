import React from "react";
import styled from "styled-components";
import { Logo, ArrowDown } from "../icons";
import { colors } from "../styles/theme";
import "../styles/main.css";

const StyledNav = styled.nav`
  height: 80px;
  position: sticky;
  top: 0;
  border-radius: 10px;
  background: #fff;
  padding: 0 2.5rem 0 5rem;
  z-index: 999;
`;

const PageName = styled.h2`
  font-size: 1.125rem;
  color: ${colors.primaryColor};
  font-weight: bold;
  font-family: "Apercu Pro Bold";
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

const UserInitials = styled.div`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  background: ${colors.primaryColor};
  border-radius: 5px;

  p {
    color: ${colors.white};
    font-weight: bold;
  }
`;

const Username = styled.p`
  font-size: 1rem;
  color: ${colors.dark};
`;

const NavItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = ({ authenticated }) => (
  <StyledNav className="mx-auto flex items-center justify-center">
    {/* <div className="flex flex-col items-center justify-center"> */}
      {!authenticated && <Logo />}
      <NavItems>
        <PageName>Dashboard</PageName>
        <UserProfile>
          <UserInitials>
            <p>J</p>
          </UserInitials>
          <Username>Jason</Username>
          <ArrowDown />
        </UserProfile>
      </NavItems>
    {/* </div> */}
  </StyledNav>
);

export default Nav;
