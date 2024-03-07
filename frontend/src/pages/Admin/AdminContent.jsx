import React from 'react'
import AdminLeftPane from '../../components/Admin/AdminLeftPane'
import "./Admin.css"
import AdminRightContent from '../../components/Admin/AdminRightContent'

export default function AdminContent() {
  return (
    <div>
      <div className="admin-all">
        <div className="admin-left">
            <AdminLeftPane></AdminLeftPane>
        </div>
        <div className="admin-right">
            <AdminRightContent></AdminRightContent>
        </div>
      </div>
    </div>
  )
}
