
import { useState } from 'react'
import './App.css'
import UsuarioLogado from './components/UsuarioLogado'
import AreaParaAdultos from './components/AreaParaAdultos'
import EfetueLogin from './components/EfetueLogin'

function App() {
  const [usuario ,setUsuario] = useState(true)
  const [idade,setIdade] = useState(0)

  // function usuarioLogou(){
  //   setUsuario(true)
  // }

  return (
    <>
    <div className='renderContainer'>
    {usuario && <UsuarioLogado/>}
      <button onClick={ () => {setUsuario(true)} }>Login</button>
      <button onClick={ () => {setUsuario(false)} }>Logout</button>
      </div>

      <div className='renderContainer'>
        <button onClick={()=> setIdade(idade-1)}>-</button>
        {idade }
        <button onClick={()=> setIdade(idade+1)}>+</button>
        {idade <= -4 && <AreaParaAdultos/>}
      </div>

      <div className='renderContainer'>
        {usuario ? <UsuarioLogado/> : <EfetueLogin/>}

      </div>

      <div className='renderContainer'>
        

      </div>

    </>
  )
}

export default App
