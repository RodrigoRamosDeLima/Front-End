import Body from './components/Body';
import './App.css';
import Header from './components/Header';

function App() {
  const showAlert = () => {
    alert('Você garantiu sua camiseta!');
  };

  return (
    <>
      <div className='all'>
        <Header />
        <Body />
        <img className="footer" src="./public/farmarcia.png" alt="" />
        <p>Clique para se inscrever e ganhar uma camiseta!</p>
        <button id="camisetaButton" onClick={showAlert}>Quero minha camiseta!</button>
        <img src="./public/farmarcia-camiseta.png" alt="" />
      </div>
    </>
  );
}

export default App;
