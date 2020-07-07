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

const AppWrapper = styled.main`
  padding-left: 5rem;
  margin-top: 3.3rem;
`;

function AuthenticatedApp() {
  return (
    <Container>
      <SideBar />
      <div>
        <Nav authenticated={true} />
        <AppWrapper>
          <Router>
            <Dashboard path="/" />
          </Router>
        </AppWrapper>
      </div>
    </Container>
  );
}

export default AuthenticatedApp;
