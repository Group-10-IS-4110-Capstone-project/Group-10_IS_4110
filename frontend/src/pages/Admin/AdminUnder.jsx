import React, { useState } from "react";
import './AdminUnder.css';
import Button from "react-bootstrap/Button";


function AdminUnder() {
  const [currentPage, setCurrentPage] = useState("Undergraduate");

  const handleExpertClick = () => {
    // Update the window location to navigate to the expert page
    window.location.href = "http://localhost:3000/AdminEx";
  };

  const handleUndergraduateClick = () => {
    setCurrentPage("Undergraduate");
    
  };

  return (
    <div className="admin-page">
      <div className="second">
        <div className="third">
          <div className="forth">
            <div className="rectangle" />
            <div className="dive" />
          </div>

          <div className="under" onClick={handleUndergraduateClick}>
            Undergraduate
          </div>
          
          <div className="expert" onClick={handleExpertClick}>
            Expert
          </div>

          {/* Render content based on the current page */}
          {currentPage === "Undergraduate" && (
            <>
         
              <div className="text-wrapper-5">Undergraduate </div>
             
            </>
          )}

          {currentPage === "Expert" && (
            <>
           
              <div className="text-wrapper-5">Expert</div>
             
            </>
          )}

                        
                <div className="chat">Chat</div>

                <div className="Cont">Content</div>

                <div className="text-wrapper-5">Undergraduate<hr></hr></div>

                

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
                    View users
                </div>

                <div className="text-wrapper-12">A.B.C. Silva</div>

                <div className="text-wrapper-13">A.B.C. Silva</div>

                <div className="text-wrapper-14">A.B.C. Silva</div> 
                <div className="text-wrapper-15">A.B.C. Silva</div>

                <div className="text-wrapper-16">A.B.C. Silva</div>

          <div className="add-users">
            <Button className="butn" variant="primary">
              Add users
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUnder;
