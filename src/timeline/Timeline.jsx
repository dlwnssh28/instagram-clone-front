import React from "react"
import "./Timeline.css"
import Sugesstions from "./Sugesstions"

function Timeline() {
  return (
    <div className="timeline">
        <div className="timeline_left">Timeline</div>
        <div className="timeline_right">
            <Sugesstions />
        </div>
    </div>
  )
}

export default Timeline