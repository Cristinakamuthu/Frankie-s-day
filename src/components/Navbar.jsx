import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <li><NavLink to="/" className="navlink">Home</NavLink></li>
      <li><NavLink to="/about" className="navlink">About</NavLink></li>
      <li><NavLink to="/reposts" className="navlink">Reposts</NavLink></li>
      <li><NavLink to="/channel" className="navlink">Channel</NavLink></li>



      

    </div>
  )
}

export default Navbar