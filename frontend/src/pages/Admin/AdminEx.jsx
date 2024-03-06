import React, { useEffect, useState } from "react";
import "./AdminEx.css";
import Button from "react-bootstrap/Button";

function AdminEx() {
<<<<<<< HEAD
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:3001/admin/displayExperts")
      .then((response) => response.json())
      .then((data) => setExperts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="admin-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="group">
            <div className="rectangle" />

            <div className="div" />
          </div>

          <div className="under">
            <a href="http://localhost:3000/AdminUnder">Undergraduate</a>
          </div>

          <div className="expert">
            <a href="http://localhost:3000/AdminEx">Expert</a>
          </div>

          <div className="chat">Chat</div>

          <div className="Cont">Content</div>

          <div className="text-wrapper-5">Expert</div>

          <img className="line" alt="Line" src={white} />

          <div className="rectangle-2" />

          <div className="rectangle-3" />

          <div className="rectangle-4" />

          <div className="rectangle-5" />

          <div className="rectangle-6" />

          <div className="rectangle-7" />

          {/* //*************** */}

          <div className="admin-box">
            <div className="view-expert">
              {experts.map((expert) => (
                <div key={expert.id} className="expert-item">
                  <p className="f-name">{expert.Name}</p>
                  
                    <Button className="remove-btn" variant="primary">
                      Remove
                    </Button>{" "}
        
                </div>
              ))}
=======
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
>>>>>>> 98516c0a64553b7adcf7b7dd5be1989294119b57
            </div>
          </div>

<<<<<<< HEAD
          {/* //******************* */}

          {/* <div className="text-wrapper-6">
            <Button className="butn" variant="primary">
              Remove
            </Button>{" "}
          </div>

          <div className="text-wrapper-7">
            <Button className="butn" variant="primary">
              Remove
            </Button>{" "}
          </div>

          <div className="text-wrapper-8">
            {" "}
            <Button className="butn" variant="primary">
              Remove
            </Button>{" "}
          </div>

          <div className="text-wrapper-9">
            {" "}
            <Button className="butn" variant="primary">
              Remove
            </Button>{" "}
          </div>

          <div className="text-wrapper-10">
            {" "}
            <Button className="butn" variant="primary">
              Remove
            </Button>{" "}
          </div> */}

          {/* <div className="rectangle-8" />

          <div className="rectangle-9" />

          <div className="rectangle-10" />

          <div className="rectangle-11" />

          <div className="rectangle-12" />

          <div className="rectangle-13" /> */}

          <div className="text-wrapper-11">View experts</div>

          {/* <div className="text-wrapper-12">A.B.C. Silva</div>

          <div className="text-wrapper-13">A.B.C. Silva</div>

          <div className="text-wrapper-14">A.B.C. Silva</div>
          <div className="text-wrapper-15">A.B.C. Silva</div>

          <div className="text-wrapper-16">A.B.C. Silva</div> */}
=======
            <div className="text-wrapper-12">A.B.C. Silva</div>

            <div className="text-wrapper-13">A.B.C. Silva</div>

            <div className="text-wrapper-14">A.B.C. Silva</div> 
            <div className="text-wrapper-15">A.B.C. Silva</div>

            <div className="text-wrapper-16">A.B.C. Silva</div>
>>>>>>> 98516c0a64553b7adcf7b7dd5be1989294119b57

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
<<<<<<< HEAD
=======

>>>>>>> 98516c0a64553b7adcf7b7dd5be1989294119b57
export default AdminEx;
