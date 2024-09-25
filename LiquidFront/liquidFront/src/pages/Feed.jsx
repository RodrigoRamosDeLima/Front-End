import Navbar from '../components/Navbar';
import { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

function Feed() {
  const { usuarioLogado, usuarios, setUsuarios } = useContext(GlobalContext);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  function inventarUsuario() {
    let usuarioNovo = {
      id: Date.now(),
      nome: 'Novo Usuario',
      email: 'novo@email.com'
    };
    setUsuarios([...usuarios, usuarioNovo]);
  }

  function cadastrarUsuario() {
    // Validação simples para evitar cadastro de campos vazios
    if (inputName.trim() === '' || inputEmail.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    let usuarioNovo = {
      id: Date.now(),
      nome: inputName,
      email: inputEmail
    };
    setUsuarios([...usuarios, usuarioNovo]);

    // Limpar campos após o cadastro
    setInputName('');
    setInputEmail('');
  }

  return (
    <div>
      <Navbar />
      <h1>Página Home do site</h1>
      <p>OLÁ, {usuarioLogado}</p>

      <div>
        <h2>Usuários</h2>
        {usuarios.map((usuario) => (
          <div key={usuario.id}>
            <p>id: {usuario.id}</p>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
          </div>
        ))}
      </div>

      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={inputEmail}
        onChange={(event) => setInputEmail(event.target.value)}
      />

      <button onClick={cadastrarUsuario}>Cadastrar</button>
      <button onClick={inventarUsuario}>Criar Usuário Automático</button>

      <h2>Homezinha</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam laboriosam
        suscipit itaque voluptate, dolore molestiae possimus optio iusto corporis
        tempore libero ipsam, reiciendis provident quae fugiat neque et
        perferendis expedita?
      </p>
    </div>
  );
}

export default Feed;
