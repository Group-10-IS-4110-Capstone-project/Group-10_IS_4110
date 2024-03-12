import React from 'react'
import AdminLeftPane from '../../components/Admin/AdminLeftPane'
import AdminRightExpert from '../../components/Admin/AdminRightExpert'
import "./Admin.css"

export default function Admin1() {
  return (
    <div>
      <div className="admin-all">
      <div className="admin-left">
            <AdminLeftPane></AdminLeftPane>
        </div>
        <div className="admin-right">
            <AdminRightExpert></AdminRightExpert>
        </div>
      </div>
    </div>
  )
}
