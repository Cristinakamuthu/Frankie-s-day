import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOPen, setIsOpen] = useState(false);
  return (

    <div className='navbar'>
      <div className="nav-header">
        <h2 className="logo"> Frankie's page</h2>
        <div className={`hamburger ${isOPen ? "open" :""}`}
        onClick={() => setIsOpen(!isOPen)}>
          <span></span>
          <span></span>
          <span></span>
           </div>
      </div>
      <ul className={`nav-links ${isOPen ? "active" : ""}`}>
      <li><NavLink to="/" className="navlink">Home</NavLink></li>
      <li><NavLink to="/about" className="navlink">About</NavLink></li>
      <li><NavLink to="/reposts" className="navlink">Reposts</NavLink></li>
      <li><NavLink to="/channel" className="navlink">Channel</NavLink></li>
     </ul>
     </div>
  )
}

export default Navbar