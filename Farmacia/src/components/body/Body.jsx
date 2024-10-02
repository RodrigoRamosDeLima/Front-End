import React from 'react';
import './Body.css';
import Section from '../Section/Section';
import PasswordManager from '../PasswordManager/PasswordManager';

function Body({ normalQueue, preferentialQueue, setNormalQueue, setPreferentialQueue, setCurrentPassword }) {
  return (
    <div className="main">
      <div className="principal">
        <h2 className="heading">Conheça a Nova Direção</h2>
        <Section />
        <PasswordManager
          normalQueue={normalQueue}
          preferentialQueue={preferentialQueue}
          setNormalQueue={setNormalQueue}
          setPreferentialQueue={setPreferentialQueue}
          setCurrentPassword={setCurrentPassword}
        />
      </div>
    </div>
  );
}

export default Body;
