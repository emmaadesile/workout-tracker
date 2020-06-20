import React from "react";
import LoginButton from "../components/Button";
import EyeIcon from "../icons/Eye";
import "../styles/main.css";

function Homepage(props) {
  // const [state, setstate] = useState(initialState)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto">
      <div className="max-w-sm mx-auto flex justify-center">
        <form className="container" onSubmit={handleSubmit}>
          <div className="grid mb-5">
            <label className="mb-2">Email Address</label>
            <input
              type="email"
              className="border rounded-md border-gray-400 py-3 px-4"
            />
          </div>

          <div className="grid mb-4">
            <span className="flex justify-between">
              <label className="mb-2">Password</label>
              <span className="flex justify-center">
                <EyeIcon />
                <p className="ml-1 text-primary">Show</p>
              </span>
            </span>
            <input
              type="email"
              className="border rounded-md border-gray-400 py-3 px-4"
            />
          </div>

          <div className="form-bottom my-6">
            <div className="flex justify-between">
              <span className="flex items-center">
                <input type="checkbox" />
                <p className="ml-1">Remember me</p>
              </span>
              <span className="text-primary">
                <p>New member? Signup</p>
              </span>
            </div>

            <LoginButton name="log in" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
