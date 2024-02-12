import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ChangePassword.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showMismatchedPasswordsAlert, setShowMismatchedPasswordsAlert] =
    useState(false);
  const {id,token} = useParams();
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReenteredPasswordChange = (e) => {
    setReenteredPassword(e.target.value);
  };

  const isStrongPassword = () => {
    // Define your password strength criteria
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async () => {
    if (!isStrongPassword()) {
      setShowAlert(true);
      setShowMismatchedPasswordsAlert(false);
    } else if (password !== reenteredPassword) {
      setShowMismatchedPasswordsAlert(true);
      setShowAlert(false);
    } else {
      try {
        navigate("/login")
        const response = await axios.post(
          `http://localhost:3001/user/changepassword/${id}/${token}`,
          {
            password: password,
          }
        );

        // Check the response status or message if needed
        console.log(response.data);

        // Handle success or show a success message to the user
        // For example, you can redirect the user to a success page
      } catch (error) {
        // Handle errors or show an error message to the user
        console.error(
          "Error during forgot password:",
          error.response?.data?.status
        );
      }
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
    setShowMismatchedPasswordsAlert(false);
  };

  return (
    <div>
      <div className="forgotPasswordContent">
        <div className="forgotPasswordForm set">
          <div className="changePasswordTitle">Change Password</div>
          <div className="changePasswordDesc">
            Enter a new password below to change your password.
          </div>
          <Form.Control
            type="text"
            className="changePasswordInput"
            id="changePassword-1"
            aria-describedby="passwordHelpBlock"
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
          <Form.Control
            type="text"
            className="changePasswordInput"
            id="changePassword-2"
            aria-describedby="passwordHelpBlock"
            placeholder="Re-enter new password"
            onChange={handleReenteredPasswordChange}
            required
          />
          <div className="passwordMust">
            password must contain a minimum of 8 characters with at least one
            uppercase one lowercase one special character and one number
          </div>
          <Button
            className="changePassword-btn"
            variant="primary"
            onClick={handleSubmit}
          >
            Reset Password
          </Button>{" "}
          <Modal show={showAlert} onHide={handleCloseAlert}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Please enter a strong password according to the criteria.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAlert}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={showMismatchedPasswordsAlert} onHide={handleCloseAlert}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              The passwords do not match. Please re-enter the passwords.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAlert}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
