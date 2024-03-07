import React from 'react'
import AdminLeftPane from '../../components/Admin/AdminLeftPane'
import AdminRightUndergraduate from '../../components/Admin/AdminRightUndergraduate'
import "./Admin.css"

export default function Admin() {
  return (
    <div>
      <div className="admin-all">
        <div className="admin-left">
            <AdminLeftPane></AdminLeftPane>
        </div>
        <div className="admin-right">
            <AdminRightUndergraduate></AdminRightUndergraduate>
        </div>
      </div>
    </div>
  )
}
