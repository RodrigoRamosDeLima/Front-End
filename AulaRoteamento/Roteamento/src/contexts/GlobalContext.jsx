import { GlobalContext } from './contexts/GlobalContext';

const App = () => {
  const usuarioLogado = "Rodrigo";
  const [usuarios, setUsuarios] = useState([]);

  return (
    <GlobalContext.Provider value={{ usuarioLogado, usuarios, setUsuarios }}>
      <Feed />
    </GlobalContext.Provider>
  );
};

export default App;
