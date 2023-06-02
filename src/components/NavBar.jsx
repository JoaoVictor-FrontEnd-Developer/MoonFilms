import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {BsFillMoonFill} from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'

import './NavBar.css'

function NavBar() {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return
      
      navigate(`/Search?q=${search}`)
      
    }

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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}/>
            <button type="submit"><BiSearchAlt2/></button>
        </form>
            </nav>
        </div>
  )
}

export default NavBar