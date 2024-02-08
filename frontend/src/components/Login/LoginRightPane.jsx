import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginRightPane.css";
import { Link } from "react-router-dom";

export default function LoginRightPane() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserNameChange = (e) => {
    setErrorMessage("");
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setErrorMessage("");
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Check if the password is valid (e.g., simple validation for demonstration)
    if (password === "secret123") {
      // Valid password, proceed with login logic
      console.log("Login successful!");
      setErrorMessage("");
    } else {
      // Invalid password, show error message
      setErrorMessage("INVALID LOGIN. PLEASE TRY AGAIN.");
      console.log("invalid password");
    }
  };

  return (
    <div>
      <div className="content_1">
        <form action="" className="userinputs">
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="User Name"
            onChange={handleUserNameChange}
            required
          />
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
        </form>
        <Button className="btn_1" variant="primary" onClick={handleLogin}>
          Continue
        </Button>{" "}
        <Link to="/forgotpassword">
          <Button className="btn_2" variant="outline-primary">
            Forgot Password
          </Button>{" "}
        </Link>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}
