
import Navbar from '../components/Navbar'
import { useContext, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

function Home() {

    const {usuarioLogado,usuarios,setUsuarios} = useContext(GlobalContext)
    const [inputName, setInputNome] = useState("")
    const [inputEmail, setInputEmail] = useState("")

    function inventarUsuario(){
        let usuarioNovo ={
            id: Date.now(),
            nome: "Novo Usuario",
            email: "novo@email.com"
        }
        setUsuarios([...usuarios, usuarioNovo])
    }
    function cadastrarUsuario(){
      let usuarioNovo ={
          id: Date.now(),
          nome: inputName,
          email: inputEmail
      }
      setUsuarios([...usuarios, usuarioNovo])
  }


  return (
    <div>
        <Navbar/>
      <h1>Pagina Home do site</h1>
      <p>OLÁ{usuarioLogado}</p>
      <div>
      <h2>Usuarios</h2>
      {usuarios.map(usuario => (
        <div>
             
                <p>id:{usuario.id}</p>
                <p>Nome:{usuario.nome}</p>
                <p>Email:{usuario.email}</p>
         </div>
            
      ))}
      </div>

      <label htmlFor="">Nome</label>
      <input type="text" 
      value={inputName}
      onChange={(event) => setInputNome(event.target.value)}/>

      <label htmlFor="">Email</label>
      <input type="email" 
      value={inputEmail}
      onChange={(event) => setInputEmail(event.target.value)}/>
      
      <button onClick={cadastrarUsuario}>Cadastrar</button>




      <button onClick={inventarUsuario}>Criar Usuario</button>
      
      <h2>Homezinha</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam laboriosam suscipit itaque voluptate, dolore molestiae possimus optio iusto corporis tempore libero ipsam, reiciendis provident quae fugiat neque et perferendis expedita?</p>
    </div>
  )
}

export default Home
