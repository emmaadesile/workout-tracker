import React, { useState } from "react";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./styles/main.css";

function UnauthenticatedApp() {
  const [formType, setFormType] = useState("login");

  function handleSignup(e) {
    e.preventDefault();
  }

  function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Nav />
      {formType === "login" ? (
        <LoginForm
          handleSubmit={handleLogin}
          switchForm={() => setFormType("signup")}
        />
      ) : (
        <SignupForm
          handleSubmit={handleSignup}
          switchForm={() => setFormType("login")}
        />
      )}
    </div>
  );
}

export default UnauthenticatedApp;
