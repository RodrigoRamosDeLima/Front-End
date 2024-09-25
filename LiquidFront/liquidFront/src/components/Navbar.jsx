import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/feed"><button>Feed</button></Link>
      <Link to="/meubar"><button>MeuBar</button></Link>
      <Link to="/perfil"><button>Perfil</button></Link>
      <Link to="/receitas"><button>Receitas</button></Link>
    </nav>
  );
}

export default Navbar;
