import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillMoonFill} from 'react-icons/bs'

import './NavBar.css'

function NavBar() {

    return (
    <div className="navContainer">
    <nav id="navbar">
          <h2>
          <Link to="/" className='logo'><BsFillMoonFill/>MoonFilms</Link>
          </h2>
            </nav>
        </div>
  )
}

export default NavBar