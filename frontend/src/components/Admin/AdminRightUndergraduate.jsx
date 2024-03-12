import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import "./AdminRightUndergraduate.css"

export default function AdminRightUndergraduate() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/admin/displayusers');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRemoveUser = async (userId) => {
    try {
      await fetch(`http://localhost:3001/admin/deleteuser/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers or tokens needed for authorization
        },
      });

      // Update the undergraduates state after successful deletion
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== userId)
      );
    } catch (error) {
      console.error('Error deleting user:', error);
    }
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
                  
                    <Button className="remove-btn" variant="primary" onClick={() => handleRemoveUser(user._id)}>
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
