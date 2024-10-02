import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <header className="header-container">
      <Logo />
      <h1 className="title">Bem-vindo à Nova Farmácia!</h1>
      <p className="subtitle">Sob nova direção</p>
      <p className="invitation">Venha para a inauguração no dia 20 de agosto!</p>
    </header>
  );
}

export default Header;
