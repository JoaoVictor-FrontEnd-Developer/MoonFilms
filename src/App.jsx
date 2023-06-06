import {Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init({duration: 1500});
}, [])

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Outlet />
        </div>
    </div>
  )
}

export default App
