import React from "react"
import "./Sidenav.css"

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav_logo"
        src="https://i.namu.wiki/i/vC4EDlF-2rZRn7tEK6ooc6_Y5rOacL0uwUhUctMlvngdEqca4mc4vlHv8NJ5iloXDsZodFP4451tARC7YCDi0JJdbWvW3Y1bjwQFMULRHi06kYDuxCN0Nbf2O1wnrpuOClrohpI_ZtQGrcbV-xizEw.svg"
        alt="Instagram Logo"
      />
      <div className="sidenav_buttons">
        <div className="side_button">
            {/* Icons */}
            <span>Home</span>
        </div>
      </div>
    </div>
  )
}

export default Sidenav