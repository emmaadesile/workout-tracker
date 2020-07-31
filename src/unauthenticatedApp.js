import React from "react";
import Homepage from './pages/hompage';
import Nav from "./components/Nav";
import LoginButton from "./components/LoginButton";
import "./styles/main.css";

function UnauthenticatedApp() {
  return (
    <div>
      {/* <Nav /> */}
      <Homepage />
      {/* <LoginButton /> */}
    </div>
  );
}

export default UnauthenticatedApp;
