import {useState} from 'react'
import './App.css'

function App() {

  const [contador,setContador] = useState(420) 

  let cont = 0;

  function tratarClique() {
    cont ++;
    console.log(`Você clicou ${cont} vezes`);
  }


  function incrementarContador() {
    setContador(contador + 1);
  }

  function decrementarContador() {
    setContador(contador - 1);
  }

  function resetarContador() {
    setContador(0);
  }

  return (
    <>

      <h1>Contador</h1>

      <button onClick={tratarClique}>Clique</button>

      <div>
        {cont}
      </div>

      <button onClick={incrementarContador}>Inc useState</button>

      <div>
        {contador} 
      </div>

      <div>
      <button onClick={decrementarContador}>Dec useState</button>
      </div>
      
      <div>
      <button onClick={resetarContador}>Resetar</button>
      </div>

    </>
  )
}

export default App
