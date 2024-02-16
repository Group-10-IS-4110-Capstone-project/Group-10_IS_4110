import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpExpert.css";
import SignUpRightPane from "./SignUpRightPane";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpExpert() {
  const [user, setUser] = useState({
    Name: "",
    companyName: "",
    jobFeild: "",
    workExperience: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showUnderGraduateSection, setShowUnderGraduateSection] =
    useState(false);
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
      console.log("User Details:", user);
      // You can also send the data to a server or perform other actions here

      try {
        const response = await axios.post(
          "http://localhost:3001/expert/register",
          user
        );
        console.log("User successfully registered:", response.data);
        navigate("/login");
        // Perform any additional actions on successful registration
      } catch (error) {
        console.error("Error registering user:", error.response.data);
        // Handle registration error (show error message, etc.)
      }
    } else {
      setPasswordMatch(false);
      console.log("Passwords do not match");
    }
  };

  const handleUnderGraduateClick = () => {
    setShowUnderGraduateSection(true);
  };

  return (
    <div>
      {showUnderGraduateSection ? (
        <SignUpRightPane></SignUpRightPane>
      ) : (
        <div className="signupright">
          <div className="box">
            <p className="title-1" onClick={handleUnderGraduateClick}>
              Undergraduate
            </p>
            <p className="title-2 active expert">Expert</p>
          </div>

          <form action="" className="signupform ex">
            <div className="box-1">
              <Form.Control
                type="text"
                className="finame"
                id="fname"
                aria-describedby="passwordHelpBlock"
                placeholder="Name"
                name="Name"
                value={user.Name}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="text"
                className="finame"
                id="Cname"
                aria-describedby="passwordHelpBlock"
                placeholder="Company name"
                name="companyName"
                value={user.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="box-2">
              <Form.Control
                type="text"
                className="emiluni"
                id="jobField"
                aria-describedby="passwordHelpBlock"
                placeholder="Job Feild"
                name="jobFeild"
                value={user.jobFeild}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="email"
                className="emiluni"
                id="workExperience"
                aria-describedby="passwordHelpBlock"
                placeholder="Work Experience"
                name="workExperience"
                value={user.workExperience}
                onChange={handleChange}
                required
              />
              <Form.Control
                type="email"
                className="emiluni"
                id="email"
                aria-describedby="passwordHelpBlock"
                placeholder="Email Address"
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
                  id="password"
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
            {/* {!passwordMatch && <p>Passwords do not match</p>} */}
            <Button
              className="btn_1 exper"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Continue
            </Button>{" "}
          </form>

          <div className="box-4 message">
            <p className="desc">Have an account?</p>
            <Link to="/login">
              <button className="log">Sign in</button>
            </Link>
          </div>

          <div className="box-5 ">
            <p>
              By signign up/ loging in, you agree to our Terms and condition.
              Privacy Policy
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
