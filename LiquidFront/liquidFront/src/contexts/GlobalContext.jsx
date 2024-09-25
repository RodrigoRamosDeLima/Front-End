import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    let usuarioLogado = 'Gill Mar';

    // Usar um contador simples para incrementar IDs únicos
    let initialId = Date.now();
    const [usuarios, setUsuarios] = useState([
        {
            id: initialId++,
            nome: 'Gill Mar',
            email: 'gill@gmail.com'
        },
        {
            id: initialId++,
            nome: 'Jane Doe',
            email: 'jane@gmail.com'
        },
        {
            id: initialId++,
            nome: 'Bob Johnson',
            email: 'bob@gmail.com'
        },
        {
            id: initialId++,
            nome: 'Alice Wilson',
            email: 'alice@gmail.com'
        },
        {
            id: initialId++,
            nome: 'Charlie Brown',
            email: 'charlie@gmail.com'
        },
        {
            id: initialId++,
            nome: 'David Green',
            email: 'david@gmail.com'
        }
    ]);

    return (
        <GlobalContext.Provider value={{ usuarioLogado, usuarios, setUsuarios }}>
            {children}
        </GlobalContext.Provider>
    );
};
