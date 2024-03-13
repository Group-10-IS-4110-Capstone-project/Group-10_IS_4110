import React from 'react'
import ExpertNav_Bar from '../components/ExpertNav_Bar'
import ExpertProfile from '../components/ExpertProfile'
import "./Undergraduate.css"
import Footer from '../components/Footer'
import Advertistemen from '../components/Advertistemen'
import CreatePost from '../components/CreatePost'

export default function Expert() {
  return (
    <div>
        <div className="undergraduateForm">
            <div className="user-nav">
                <ExpertNav_Bar></ExpertNav_Bar>
            </div>
            <div className="user-profile">
                <ExpertProfile></ExpertProfile>
            </div>
            <div className="user-profile">
                <CreatePost></CreatePost>
            </div>
            <div className="user-profile">
                <Advertistemen></Advertistemen>
            </div>
            <div className="user-footer">
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}
