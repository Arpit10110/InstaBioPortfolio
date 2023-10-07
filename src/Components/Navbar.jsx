import React from 'react'
import {Link} from "react-router-dom"
import "../style/nav.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='logoname'>Arpit</Link>
      <div className="navbtn">
        <Link className='navlinks' to="/">Home</Link>
        <Link className='navlinks' to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar