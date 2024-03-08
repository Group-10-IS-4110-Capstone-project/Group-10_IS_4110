import React from 'react'
import pen from '../../assets/pen-square.png'
import vector from '../../assets/Vector.png'
import delevector from '../../assets/Dele_Vector.png'
import publi from '../../assets/Publi_Vector.png'
import cre from '../../assets/Creat_Vector.png'
import dele from '../../assets/DeleAdd_Vector.png'
import "./AdminRightUndergraduate.css"

export default function AdminRightContent() {
  return (
    <div>
      <div className="admin-right1">
        <p className="admin-under1">Content</p>
        <div className="empty" style={{ width: "70px" }}></div>
        <div className="boxwrap">
            <div className="boxwarp1">
                <img src={pen} alt="" className="pencil" />
                <div className="con1">Add Content</div>
            </div>
            <div className="boxwarp1">
                <img src={vector} alt="" className="pencil" />
                <div className="con1">Edit Content</div>
            </div>
            <div className="boxwarp1">
                <img src={delevector} alt="" className="pencil" />
                <div className="con1">Delete Content</div>
            </div>
            <div className="boxwarp1">
                <img src={publi} alt="" className="pencil" />
                <div className="con1">Publish Content</div>
            </div>
            <div className="boxwarp1">
                <img src={cre} alt="" className="pencil" />
                <div className="con1">Create Advertisement</div>
            </div>
            <div className="boxwarp1">
                <img src={dele} alt="" className="pencil" />
                <div className="con1">Delete Advertisement</div>
            </div>
        </div>
      </div>
    </div>
  )
}
