import React from 'react'
import ExpertNav_Bar from '../components/ExpertNav_Bar'
import Feed from '../components/Feed'

export default function ExpertFeed() {
  return (
    <div>
        <ExpertNav_Bar></ExpertNav_Bar>
        <div className="feed">
            <Feed></Feed>
        </div>
    </div>
  )
}
