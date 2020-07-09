import React from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import Dashboard from "./pages/dashboard";
import SideBar from "./components/SideBar";
import Nav from "./components/Nav";
import { colors } from "./styles/theme";

const Container = styled.div`
  display: flex;
  background: ${colors.almostWhite};
`;

const AppWrapper = styled.main`
  margin-left: 300px;
  margin-top: 3.3rem;
`;

function AuthenticatedApp() {
  return (
    <Container>
      <SideBar />
      <AppWrapper>
        <Nav authenticated={true} />
        {/* <Router>
          <Dashboard path="/" />
        </Router> */}
      </AppWrapper>
    </Container>
  );
}

export default AuthenticatedApp;
