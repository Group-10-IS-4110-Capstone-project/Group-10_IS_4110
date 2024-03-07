import React from 'react'
import "./AdminLeftPane.css"
import { Link } from 'react-router-dom';

export default function AdminLeftPane() {
  return (
    <div>
      <div className="adminleft-pane">
        <Link to={"/Admin"} className="admin-text">Undergraduate</Link>
        <Link to={"/AdminEx"} className="admin-text">Expert</Link>
        <div className="admin-text">Chat</div>
        <div className="admin-text">Content</div>
      </div>
    </div>
  )
}
