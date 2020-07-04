import React, { useState } from "react";
import { Link } from "@reach/router";
import LoginButton from "../components/Button";
import { Container, StyledSpan } from "./shareComponents";
import EyeIcon from "../icons/Eye";
import "../styles/main.css";

function SignupForm({ handleSubmit, switchForm }) {
  const [email, setEmail] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <form className="container" onSubmit={handleSubmit}>
        <div className="grid mb-5">
          <label className="mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            type="name"
            name="fullname"
            className="border rounded-md border-gray-400 py-3 px-4"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="grid mb-5">
          <label className="mb-1">Email Address</label>
          <input
            type="email"
            className="border rounded-md border-gray-400 py-3 px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid mb-5">
          <span className="flex justify-between">
            <label className="mb-1">Password</label>
            <StyledSpan
              className="flex justify-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              <EyeIcon />
              <p className="ml-1 text-primary">
                {showPassword ? "Hide" : "Show"}
              </p>
            </StyledSpan>
          </span>
          <input
            type={showPassword ? "text" : "password"}
            className="border rounded-md border-gray-400 py-3 px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-bottom mt-6">
          <LoginButton name="create account" type="submit" />

          <div className="flex justify-between mt-4">
            <span className="flex items-center">
              <input type="checkbox" />
              <p className="ml-1">Remember me</p>
            </span>
            <span className="text-primary">
              <Link to="/" onClick={switchForm}>
                Have an account? Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default SignupForm;
