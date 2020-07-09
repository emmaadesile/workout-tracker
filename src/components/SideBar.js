import React from "react";
import Logo from "../icons/logo";
import styled from "styled-components";
import { colors } from "../styles/theme";
import {
  Clipboard,
  Dashboard,
  Kettlebell,
  PersonSharp,
  Power,
  Settings,
} from "../icons";

const Container = styled.div`
  height: 100vh;
`;

const StyledSideBar = styled.ul`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 230px;
  box-shadow: 2px 0px 15px rgba(0, 0, 0, 0.06);
  padding: 0 1.5rem;
  background: ${colors.white};
  `;

const SidebarItem = styled.li`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  list-style: none;
  margin-bottom: 1.3rem;
  transition: background 200ms ease-in-out;
  cursor: pointer;
  padding: 0.5rem 0.9rem;
  border-radius: 5px;
  
  p {
    color: ${colors.faintGrey};
    font-size: 0.95rem;
  }

  &:hover,
  &:active {
    background: ${colors.hoverColor};
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  place-items: center;
  margin-bottom: 2rem;
`;

const SideBar = () => {
  return (
    <Container>
      <StyledSideBar>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <SidebarItem>
          <Dashboard />
          <p>Dashboard</p>
        </SidebarItem>
        <SidebarItem>
          <Clipboard />
          <p>My Workouts</p>
        </SidebarItem>
        <SidebarItem>
          <Kettlebell />
          <p>All routines</p>
        </SidebarItem>
        <SidebarItem>
          <PersonSharp />
          <p>Profile</p>
        </SidebarItem>
        <SidebarItem>
          <Settings />
          <p>Settings</p>
        </SidebarItem>
        <SidebarItem style={{ justifySelf: "end" }}>
          <Power />
          <p>Logout</p>
        </SidebarItem>
      </StyledSideBar>
    </Container>
  );
};

export default SideBar;
