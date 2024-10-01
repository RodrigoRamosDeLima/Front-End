// PasswordPage.jsx
import React from 'react';
import './PasswordPage.css';

function PasswordPage({ normalQueue, preferentialQueue, currentPassword }) {
  return (
    <div className="password-page">
      <h2>Dados das Senhas</h2>
      <div>
        <h3>Fila de Senhas Preferenciais</h3>
        {preferentialQueue.length > 0 ? (
          <ul>
            {preferentialQueue.map((password, index) => (
              <li key={index}>{password}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma senha preferencial na fila.</p>
        )}
      </div>
      <div>
        <h3>Fila de Senhas Normais</h3>
        {normalQueue.length > 0 ? (
          <ul>
            {normalQueue.map((password, index) => (
              <li key={index}>{password}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma senha normal na fila.</p>
        )}
      </div>
      <div>
        <h3>Senha Chamada</h3>
        <p>{currentPassword || 'Nenhuma senha chamada'}</p>
      </div>
    </div>
  );
}

export default PasswordPage;
