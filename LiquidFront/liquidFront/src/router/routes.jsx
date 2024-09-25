
import { createBrowserRouter } from 'react-router-dom'

import Feed from '../pages/Feed'
import MeuBar from '../pages/MeuBar'
import Perfil from '../pages/Perfil'
import Receitas from '../pages/Receitas'

const router = createBrowserRouter([
    { path: "/", element: <Feed /> }, // Página inicial padrão
    { path: "/feed", element: <Feed /> },
    { path: "/meubar", element: <MeuBar /> },
    { path: "/perfil", element: <Perfil /> },
    { path: "/receitas", element: <Receitas /> },
    { path: "*", element: <div>Página não encontrada</div> } // Rota para 404
]);


export default router
