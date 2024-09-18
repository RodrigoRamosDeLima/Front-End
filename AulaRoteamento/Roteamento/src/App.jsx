import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Generica from './pages/Generica'
import Contato from './pages/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Generica/>
      <Contato/>
    </>
  )
}

export default App
