import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, push } from "firebase/database";
import { auth, db } from '../../firebase'; // Importing Firebase authentication and database
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUpExpert.css";
import SignUpRightPane from './SignUpRightPane';

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

  const [PasswordMatch, setPasswordMatch] = useState(true);
  const [showUnderGraduateSection, setShowUnderGraduateSection] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (user.password === user.confirmPassword) {
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        const newUser = userCredential.user;
  
        const userDataRef = ref(db, 'users');
        await push(userDataRef, {
          uid: newUser.uid,
          name: user.Name,
          companyName: user.companyName,
          jobFeild: user.jobFeild,
          workExperience: user.workExperience,
          email: user.email
        });
  
        console.log("User signed up and data stored:", newUser);
        // You can redirect the user to another page or perform other actions upon successful signup
      } else {
        setPasswordMatch(false);
        console.log("Passwords do not match");
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle signup errors here
    }
  };  

  const handleUnderGraduateClick = () => {
    setShowUnderGraduateSection(true);
  };
  
  return (
    <div>
      {showUnderGraduateSection ? (
        <SignUpRightPane />
      ) : (
        <div className="signupright">
          <div className="box">
            <p className="title-1" onClick={handleUnderGraduateClick}>Undergraduate</p>
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
                id='jobField'
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
                id='workExperience'
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
                id='email'
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
                  id='password'
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
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
            <div className="log">Log in</div>
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
