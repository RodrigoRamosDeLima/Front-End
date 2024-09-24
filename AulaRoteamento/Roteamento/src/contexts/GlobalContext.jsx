import { createContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    let usuarioLogado = ' Gill Mar'
    const[usuarios,setUsuarios] = useState([
        {
            id:Date.now(),
            nome:'Gill Mar',
            email:'gill@gmail.com'
        },
        {   id: Date.now()+1,
            nome:'Jane Doe',
            email:'jane@gmail.com'
       },
       {
        id: Date.now()+2,
            nome:'Bob Johnson',
            email:'bob@gmail.com'
       },
       {
        id: Date.now()+3,
            nome:'Alice Wilson',
            email:'alice@gmail.com'
       },
       {
        id: Date.now()+4,
            nome:'Charlie Brown',
            email:'charlie@gmail.com'
       },
       {
        id: Date.now()+5,
            nome:'David Green',
            email:'david@gmail.com'
       }
    ])

    return(
        <GlobalContext.Provider value={{usuarioLogado ,usuarios, setUsuarios}}>
            
            {children}
        </GlobalContext.Provider>
    )
}