import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillMoonFill} from 'react-icons/bs'
import { BiMoon, BiSearchAlt2 } from 'react-icons/bi'

import './NavBar.css'

function NavBar() {
    return (
    <div className="navContainer">
    <nav id="navbar">
          <div className="nav-icons">
          <h2>
          <Link to="/" className='logo'><BsFillMoonFill/>MoonFilms</Link>
          </h2>
          {/* <ul>
            <li><a href="#top_rated">Melhores filmes</a></li>
            <li><a href="#upcoming">Em breve</a></li>
          </ul> */}
        </div>
        <form>
            <input type="text" placeholder="Busque um filme"/>
            <button type="submit"><BiSearchAlt2/></button>
        </form>
            </nav>
        </div>
  )
}

export default NavBar