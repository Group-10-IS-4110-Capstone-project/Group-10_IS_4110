import React from 'react'
import UnderNav_Bar from '../components/UnderNav_Bar'
import Feed from '../components/Feed'

export default function UserFeed() {
  return (
    <div>
        <UnderNav_Bar></UnderNav_Bar>
        <div className="feed" style={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent:"center",width:"100%"}}>
            <Feed></Feed>
        </div>
    </div>
  )
}
