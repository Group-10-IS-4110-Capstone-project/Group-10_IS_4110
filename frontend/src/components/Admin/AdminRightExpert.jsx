import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import "./AdminRightUndergraduate.css"


export default function AdminRightExpert() {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
      // Fetch data from the backend
      fetch("http://localhost:3001/admin/displayExperts")
        .then((response) => response.json())
        .then((data) => setExperts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
    <div>
      <div className="admin-right1">
        <p className="admin-under1">Experts</p>
        <div className="empty" style={{ width: "68px" }}></div>
        <p className="admin-view-under1">View Experts</p>
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

            </div>
          </div>
        <Button
              className="btn-add"
              variant="primary"
              type="submit"
            >
              Add Experts
            </Button>{" "}
      </div>
    </div>
  )
}