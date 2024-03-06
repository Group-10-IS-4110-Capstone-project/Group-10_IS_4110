import React from "react"; 
import './AdminEx.css'
import Button from "react-bootstrap/Button";

function AdminEx() {
  const handleUndergraduateClick = () => {
    window.location.href = "http://localhost:3000/AdminUnder";
  };

  return (
    <div className="admin-page">
      <div className="group-wrapper">
        <div className="thar">
          <div className="cove">
            <div className="rectangle" />
            <div className="diva" />
          </div>

          <div className="under" onClick={handleUndergraduateClick}>
            Undergraduate
          </div>

          <div className="expert">
            Expert
          </div>

          <div className="chat">Chat</div>

            <div className="Cont">Content</div>

            <div className="text-wrapper-5">Expert<hr></hr></div>

            

            <div className="rectangle-2" />

            <div className="rectangle-3" />

            <div className="rectangle-4" />

            <div className="rectangle-5" />

            <div className="rectangle-6" />

            <div className="rectangle-7" />

            <div className="text-wrapper-6">
            <Button className="butn" variant="primary" >
            Remove
            </Button>{" "}

                
                </div>

            <div className="text-wrapper-7">


            <Button className="butn" variant="primary" >
            Remove
            </Button>{" "}
                </div>

            <div className="text-wrapper-8"> <Button className="butn" variant="primary" >
            Remove
            </Button>{" "}</div>

            <div className="text-wrapper-9"> <Button className="butn" variant="primary" >
            Remove
            </Button>{" "}</div>

            <div className="text-wrapper-10"> <Button className="butn" variant="primary" >
            Remove
            </Button>{" "}</div>

            <div className="rectangle-8" />

            <div className="rectangle-9" />

            <div className="rectangle-10" />

            <div className="rectangle-11" />

            <div className="rectangle-12" />

            <div className="rectangle-13" />

            <div className="text-wrapper-11">
                View experts
            </div>

            <div className="text-wrapper-12">A.B.C. Silva</div>

            <div className="text-wrapper-13">A.B.C. Silva</div>

            <div className="text-wrapper-14">A.B.C. Silva</div> 
            <div className="text-wrapper-15">A.B.C. Silva</div>

            <div className="text-wrapper-16">A.B.C. Silva</div>

          <div className="add-users">
            <Button className="butn" variant="primary">
              Add experts
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminEx;
