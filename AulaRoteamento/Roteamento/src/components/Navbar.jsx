import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 



function Navbar() {
  return (
    <nav className='navbar'>
       <button><Link to="/"><button>Home</button></Link></button> 
       <button><Link to="/contato"><button>Contato</button></Link></button> 
        <Link to="/generica"><button>Generica</button></Link>
        <Link to="/final"><button>Final</button></Link>
    </nav>
  )
}

export default Navbar
