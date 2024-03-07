import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import "./AdminRightUndergraduate.css"

export default function AdminRightUndergraduate() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      // Fetch data from the backend
      fetch("http://localhost:3001/admin/displayusers")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleRemoveUser = (userId) => {
      // Send a DELETE request to remove the user
      fetch(`http://localhost:3001/admin/deleteuser/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers or tokens needed for authorization
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Update the users state after successful deletion
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        })
        .catch((error) => console.error("Error deleting user:", error));
    };

  return (
    <div>
      <div className="admin-right1">
        <p className="admin-under1">Undergraduate</p>
        <div className="empty"></div>
        <p className="admin-view-under1">View Users</p>
        <div className="admin-box">
            <div className="view-expert">
              {users.map((user) => (
                <div key={user.id} className="expert-item">
                  <p className="f-name">{user.firstName}</p>
                  
                    <Button className="remove-btn" variant="primary" onClick={() => handleRemoveUser(user.id)}>
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
              Add Users
            </Button>{" "}
      </div>
    </div>
  )
}
