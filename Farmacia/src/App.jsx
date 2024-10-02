import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import MenuBar from './components/MenuBar/MenuBar';
import PasswordPage from './pages/PasswordPage/PasswordPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [normalQueue, setNormalQueue] = useState([]);
  const [preferentialQueue, setPreferentialQueue] = useState([]);
  const [currentPassword, setCurrentPassword] = useState(null);

  const showAlert = () => {
    alert('Você garantiu sua camiseta!');
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <MenuBar />
        <Routes>
          <Route
            path="/"
            element={
              <Body
                normalQueue={normalQueue}
                preferentialQueue={preferentialQueue}
                setNormalQueue={setNormalQueue}
                setPreferentialQueue={setPreferentialQueue}
                setCurrentPassword={setCurrentPassword}
              />
            }
          />
          <Route
            path="/senhas"
            element={
              <PasswordPage
                normalQueue={normalQueue}
                preferentialQueue={preferentialQueue}
                currentPassword={currentPassword}
              />
            }
          />
        </Routes>
        <div className="footer">
          <img src="./assets/images/farmarcia.png" alt="Farmarcia logo" />
          <p>Clique para se inscrever e ganhar uma camiseta!</p>
          <button id="camisetaButton" onClick={showAlert}>Quero minha camiseta!</button>
          <img src="./assets/images/farmarcia-camiseta.png" alt="Camiseta" />
        </div>
      </div>
    </Router>
  );
}

export default App;
