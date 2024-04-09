import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ForgotPassword1.css";
import fp from "../../assets/fp.jpg"
import arrow from "../../assets/arrow 2.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ForgotPassword1() {

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Reset the validity when the user is typing
    setIsValidEmail(true);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    // Update the state to reflect whether the form is submitted and email's validity
    setIsSubmitted(true);
    setIsValidEmail(isValidEmail);

    if (!isValidEmail) {
      // Do not proceed with the form submission if the email is invalid
      return;
    }
    try {
      navigate("/login")
      const response = await axios.post("http://localhost:3001/user/forgotpassword", {
        email: email,
      });

      alert("Email sent successfully");
      // Check the response status or message if needed
      console.log(response.data);
      

      // Handle success or show a success message to the user
      // For example, you can redirect the user to a success page
    } catch (error) {
      // Handle errors or show an error message to the user
      console.error("Error during forgot password:", error.response?.data?.status);
    }

    
  };

  return (
    <div>
      <div className="forgotPasswordContent">
        <div className="forgotPasswordForm">
          <img
            src={fp}
            alt=""
            className="img404"
          />
          <div className="forgotPasswordTitle">Forgot Password</div>
          <div className="forgotPasswordDes">
            Enter your email and we’ll send you a link to reset your password.
          </div>
          <Form.Control
            type="text"
            className="forgotPasswordInput"
            id="forgotEmail"
            aria-describedby="passwordHelpBlock"
            placeholder="yourEmail@gmail.com"
            onChange={handleEmailChange}
            required
          />
          {!isValidEmail && (
            <div className="forgotWrongMessage" >We can not find your email !</div>
          )}
          <Button
            className="forgotPassword-btn"
            variant="primary"
            onClick={handleFormSubmit}
          >
            Submit
          </Button>{" "}
          
          <div className="forgotPasswordMessageDesc">
            <img
              src={arrow}
              alt=""
              className="linkArrow"
            />

            <Link to="/login">
            <button className="forgotPasswordMessage">Back to login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
