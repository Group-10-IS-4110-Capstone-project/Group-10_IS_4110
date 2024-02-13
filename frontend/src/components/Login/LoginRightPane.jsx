import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginRightPane.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginRightPane() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setErrorMessage("");
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setErrorMessage("");
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    // Check if the password is valid (e.g., simple validation for demonstration)
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email: userName,
        password: password,
      });

      console.log(response.data.message);
      setErrorMessage("");
      if (response.data.message === "Incorrect password" || "User not found") {
        setErrorMessage("Incorrect password or Username. Please try again.");
      }

      if (response.data.message === "success") {
        navigate("/");
      }
      // Redirect to the next page or perform other actions on successful login
    } catch (error) {
      console.error("Error during login:", error.response?.data?.message);
      setErrorMessage("Invalid login credentials. Please try again.");
      
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
        <div className={errorMessage ? "error-message" : ""}>
          {errorMessage}
        </div>
      </div>
    </div>
  );
}
