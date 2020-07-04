import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import "../styles/main.css";

function Homepage(props) {

  return (
    <div className="container mx-auto">
      <LoginForm />
    </div>
  );
}

export default Homepage;
