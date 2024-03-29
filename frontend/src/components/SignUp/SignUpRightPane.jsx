import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpRightPane.css";
import SignUpExpert from "./SignUpExpert";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";


export default function SignUpRightPane() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    university: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showExpertSection, setShowExpertSection] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [passwordShowAlert, setPasswordShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password === user.confirmPassword) {
      setPasswordMatch(true);
      setPasswordShowAlert(false)
      console.log("User Details :", user);
      // You can also send the data to a server or perform other actions here

      try {
        const response = await axios.post("http://localhost:3001/user/register", user);
      
        console.log("User successfully registered:", response.data);
        navigate("/login");
        // Perform any additional actions on successful registration
      } catch (error) {
        // console.error("Error registering user:", error.response.data);
      
        if (error.response.data.message === "Email already exists") {
          // Handle the case where email already exists
          setShowAlert(true);
        } else {
          console.error("Error registering user:", error.response.data);
        }
      }
      

      //code
    } else {
      setPasswordMatch(false);
      setPasswordShowAlert(true)
      console.log("Passwords do not match");
    }
  };

  const handleExpertClick = () => {
    setShowExpertSection(true);
  };

  

  const handleCloseAlert = () => {
    setShowAlert(false);
    setPasswordShowAlert(false);
  };

  return (
    <div>
      {showExpertSection ? (
        <SignUpExpert></SignUpExpert>
      ) : (
        <div className="signupright active-1">
          <div className="box">
            <p className="title-1 active">Undergraduate</p>
            <p className="title-2" onClick={handleExpertClick}>
              Expert
            </p>
          </div>

          {/* {showExpertSection ? (
          <SignUpExpert></SignUpExpert>
        ) : ( */}

          <form action="" className="signupform">
            <div className="box-1">
              <Form.Control
                type="text"
                className="finame"
                id="fname"
                aria-describedby="passwordHelpBlock"
                placeholder="First Name"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="text"
                className="finame"
                id="lname"
                aria-describedby="passwordHelpBlock"
                placeholder="Last name"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="box-2">
              <Form.Control
                type="text"
                className="emiluni"
                aria-describedby="passwordHelpBlock"
                placeholder="University"
                name="university"
                value={user.university}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="email"
                className="emiluni"
                aria-describedby="passwordHelpBlock"
                placeholder="Email Adress"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="box-3">
              <div className="innerpassword">
                <Form.Control
                  type="password"
                  className="password-1"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                {/* <i class="bi bi-eye"></i> */}
              </div>

              <Form.Control
                type="password"
                className="password-1"
                id="confirmPassword"
                aria-describedby="passwordHelpBlock"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            {!passwordMatch && <p>Passwords do not match</p>}
            <Button
              className="btn_1"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Continue
            </Button>{" "}
          </form>
          {/* )}  */}

          {/* {!showExpertSection && (
          <> */}
          <div className="box-4">
            <p className="desc">Have an account?</p>

            <Link to="/login">
              <button className="log">Sign in</button>
            </Link>
          </div>

          <div className="box-5">
            <p>
              By signign up/ loging in, you agree to our Terms and condition.
              Privacy Policy
            </p>
          </div>

          <div>
          <Modal show={showAlert} onHide={handleCloseAlert}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Email already exists
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAlert}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
            </div>

            <div>
          <Modal show={passwordShowAlert} onHide={handleCloseAlert}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Passwords do not match
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAlert}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
            </div>
          {/* </>
        )} */}
        </div>
        
      )}
    </div>
  );
}
