import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ForgotPassword1.css";
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
      const response = await axios.post("http://localhost:3001/api/forgotpassword", {
        email: email,
      });

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
            src="https://s3-alpha-sig.figma.com/img/f606/022d/82e1e29df907c0ec7a2f535f97e90849?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dUNbeYMmrtdMvCZVKsOSb8Pn0aoxVFXfRhIWs9JxFmAewNVyK5FD7wFgASHo1ghqhe1sz2hZapJuZlLhfRdgkdUoH3kU7GH7reLw1nxDuKrUkrosddqZW-XTRgFY-Iqr~cqy-uAsYOUu~hzm0XWulXe3Hxb0z~~WPh7a2JFyCeNxU8psoAiYUlwgAsCBh6AQMRCb~snBx1Fya4PpBGsnnYuA20M8F3aHXU8JOSoBrbJU0tkDHHJCV4P~ZR8GAvh6QLIXm67OIsObT0hNgOu7OcKcInLMFiPgKGrN7AFz9A~~TX44OEqSDDVFF3rfiLDGAErNitgZW9AQoxYBY5EiKA__"
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
              src="https://s3-alpha-sig.figma.com/img/5efd/7a32/bc7860f727863436f76c19fe713b82db?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hfx2A~vqO~vYivbV5nUERnE6oaKcDoSQ7rf6uZzbnFtqb05Hqor0h1jiLfHkRyhp1tShE4~H3w3Iw2PQeW02JOcIpu55bVXDkUuVITf9lXQpIQxYDwexXtMpy35E~5iweXR8V~QZFSNd9OqjDMWY7~p5dfwfo78ER44~PE6P7xqaD9BX0vBBFvFOEFcIrDCpepA11bbUv6fO1orpxizkvAX07Y6qu5GA6-1nwCY-uwvFu7ocmASFWumMSH1iz88GAzXL9gHtB9ZWaIxv7SPVVZM4Cp9~nxuN5DStr6Bplc7FuKU4MG47YymWj8EA5OB2oFiZwlXX451VL8i6WTfZpg__"
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
