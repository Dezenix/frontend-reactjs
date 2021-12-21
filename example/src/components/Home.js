import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <div className='header'>
        <h1>Frontend-reactjs</h1>
      </div>

      <div className='contri'>
        <div className='contri_heading'>
          <h3>Start Contributing</h3>
        </div>
        <hr />

        <div className='contri_components'>
          <Link to='/login' className='component'>
            <h2>Login</h2>
          </Link>
          <Link to='/register' className='component'>
            <h2>Register</h2>
          </Link>
          <Link to='/product_card' className='component'>
            <h2>Product card</h2>
          </Link>
          {/* Add new Link Here for your new component */}
          <Link to="/progress_bar" className="component" >
            <h2>Progress Bar</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
