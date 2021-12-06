import React from 'react'
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="Home">
      <div className="header">
        <h1>Frontend-reactjs</h1>
      </div>

      <div className="contri">
        <div className="contri_heading">
          <h3>Start Contributing</h3>
        </div>
        <hr />

        <div className="contri_components">
          <Link to="/login" className="component" target="_blank">
            <h2>Login</h2>
          </Link>
          <Link to="/register" className="component" target="_blank">
            <h2>Register</h2>
          </Link>
          {/* Add new Link Here for your new component */}
        </div>
      </div>
    </div>
  )
}