import Feed from './pages/Feed'
import MeuBar from './pages/MeuBar'
import Perfil from './pages/Perfil'
import Receitas from './pages/Receitas'

import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Feed/>
    <MeuBar/>
    <Perfil/>
    <Receitas/>
    </>
  )
}

export default App
