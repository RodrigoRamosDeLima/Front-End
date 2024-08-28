
import Produto from './components/Produto';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputNome, setInputNome] = useState('');
  const [inputDescricao, setInputDescricao] = useState('');
  const [inputPreco, setInputPreco] = useState('');
  const [inputPeso, setInputPeso] = useState('');
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Cadeira de Praia",
      descricao: "Cadeira dobrável e leve, ideal para relaxar na praia.",
      preco: 150.00,
      peso: 2.5
    },
    {
      id: 2,
      nome: "Guarda-Sol",
      descricao: "Guarda-sol grande com proteção UV, fácil de montar.",
      preco: 120.00,
      peso: 3.0
    },
    {
      id: 3,
      nome: "Toalha de Praia",
      descricao: "Toalha grande e macia, feita de algodão de alta qualidade.",
      preco: 80.00,
      peso: 0.8
    },
    {
      id: 4,
      nome: "Sunga",
      descricao: "Sunga masculina com estampas coloridas e tecido seco rápido.",
      preco: 50.00,
      peso: 0.2
    },
    {
      id: 5,
      nome: "Biquíni",
      descricao: "Biquíni feminino com detalhes em renda, disponível em várias cores.",
      preco: 60.00,
      peso: 0.1
    },
    {
      id: 6,
      nome: "Protetor Solar",
      descricao: "Protetor solar fator 50, resistente à água.",
      preco: 40.00,
      peso: 0.2
    },
    {
      id: 7,
      nome: "Bolsa Térmica",
      descricao: "Bolsa térmica para manter suas bebidas geladas.",
      preco: 70.00,
      peso: 1.0
    },
    {
      id: 8,
      nome: "Óculos de Sol",
      descricao: "Óculos de sol com proteção UV e lentes polarizadas.",
      preco: 100.00,
      peso: 0.15
    },
    {
      id: 9,
      nome: "Chapéu de Sol",
      descricao: "Chapéu de palha com aba larga para proteção extra contra o sol.",
      preco: 90.00,
      peso: 0.3
    },
    {
      id: 10,
      nome: "Sandálias de Praia",
      descricao: "Sandálias leves e confortáveis, ideais para caminhar na areia.",
      preco: 45.00,
      peso: 0.5
    },
    {
      id: 11,
      nome: "Kit de Snorkel",
      descricao: "Kit com máscara e snorkel para explorar o fundo do mar.",
      preco: 150.00,
      peso: 0.6
    },
    {
      id: 12,
      nome: "Bolsa de Praia",
      descricao: "Bolsa grande com vários compartimentos para levar tudo o que você precisa.",
      preco: 75.00,
      peso: 0.7
    },
    {
      id: 13,
      nome: "Protetor Labial",
      descricao: "Protetor labial com fator de proteção solar.",
      preco: 15.00,
      peso: 0.05
    },
    {
      id: 14,
      nome: "Cadeira de Praia Inflável",
      descricao: "Cadeira inflável confortável e compacta.",
      preco: 130.00,
      peso: 1.0
    },
    {
      id: 15,
      nome: "Repelente de Insetos",
      descricao: "Repelente eficaz contra mosquitos e outros insetos.",
      preco: 25.00,
      peso: 0.1
    },
    {
      id: 16,
      nome: "Bolsa de Água",
      descricao: "Bolsa para levar água ou bebidas, com capacidade de 1 litro.",
      preco: 20.00,
      peso: 0.3
    },
    {
      id: 17,
      nome: "Roupão de Praia",
      descricao: "Roupão grande e macio, ideal para se secar após o banho de mar.",
      preco: 85.00,
      peso: 0.9
    },
    {
      id: 18,
      nome: "Bola de Futebol",
      descricao: "Bola de futebol resistente para jogar na areia.",
      preco: 40.00,
      peso: 0.5
    },
    {
      id: 19,
      nome: "Prancha de Surf",
      descricao: "Prancha de surf leve e durável, ideal para iniciantes e avançados.",
      preco: 800.00,
      peso: 3.5
    },
    {
      id: 20,
      nome: "Caiaque Inflável",
      descricao: "Caiaque inflável compacto e resistente para aventuras no mar.",
      preco: 500.00,
      peso: 4.0
    }
  ]);

  function cadastrouNome(event) {
    setInputNome(event.target.value);
  }

  function cadastrouDescricao(event) {
    setInputDescricao(event.target.value);
  }

  function cadastrouPreco(event) {
    setInputPreco(event.target.value);
  }

  function cadastrouPeso(event) {
    setInputPeso(event.target.value);
  }

  function adicionarProduto() {
    const novoProduto = {
      id: produtos.length + 1, 
      nome: inputNome,
      descricao: inputDescricao,
      preco: parseFloat(inputPreco),
      peso: parseFloat(inputPeso)
    };

    setProdutos([novoProduto,...produtos]);

    setInputNome('');
    setInputDescricao('');
    setInputPreco('');
    setInputPeso('');
  }

  return (
    <>
      <div className='formCadastro'>
        <h2>Cadastro de Produtos</h2>
        <input
          type='text'
          placeholder='Nome'
          value={inputNome}
          onChange={cadastrouNome}
        />
        <input
          type='text'
          placeholder='Descrição'
          value={inputDescricao}
          onChange={cadastrouDescricao}
        />
        <input
          type='number'
          placeholder='Preço'
          value={inputPreco}
          onChange={cadastrouPreco}
        />
        <input
          type='number'
          placeholder='Peso'
          value={inputPeso}
          onChange={cadastrouPeso}
        />
        <button onClick={adicionarProduto}>Cadastrar</button>
      </div>
      <div className='cards'>
        {produtos.map((p) => (
          <Produto produto={p} key={p.id} />
        ))}
      </div>
    </>
  );
}

export default App;
