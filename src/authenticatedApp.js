import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import Dashboard from "./pages/dashboard";
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import { colors } from "./styles/theme";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  background: ${colors.almostWhite};
`;

function AuthenticatedApp() {
  return (
    <Container>
      <SideBar />
      <div>
        <Nav authenticated={true} />
        <Router>
          <Dashboard path="/" />
        </Router>
      </div>
    </Container>
  );
}

export default AuthenticatedApp;
