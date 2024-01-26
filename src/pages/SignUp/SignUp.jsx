import React from "react";
import "./SignUp.css";
import SignUpLeftPane from "../../components/SignUp/SignUpLeftPane";
import SignUpRightPane from "../../components/SignUp/SignUpRightPane";

export default function SignUp() {
  return (
    <div>
      <div className="loginpage-content">
        <div className="leftpane">
          <SignUpLeftPane></SignUpLeftPane>
        </div>
        <div className="rightpane">
          <SignUpRightPane></SignUpRightPane>
        </div>
      </div>
    </div>
  );
}
