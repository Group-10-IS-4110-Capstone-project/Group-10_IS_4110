import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import "./AdminRightUndergraduate.css"


export default function AdminRightExpert() {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/admin/displayExperts');
          const data = await response.json();
          setExperts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    const handleRemoveUser = async (expertId) => {
      try {
        await fetch(`http://localhost:3001/admin/deleteexpert/${expertId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Include any additional headers or tokens needed for authorization
          },
        });
  
        // Update the undergraduates state after successful deletion
        setExperts((prevExperts) =>
          prevExperts.filter((expert) => expert._id !== expertId)
        );
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };

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
                  
                    <Button className="remove-btn" variant="primary" onClick={() => handleRemoveUser(expert._id)}>
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