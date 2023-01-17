import { createContext, useContext, useState } from "react";



const Token = createContext()
const URL = createContext()
const UpdateToken = createContext()

export function useToken(){
    return useContext(Token)
}

export function useUpdateToken(){
    return useContext(UpdateToken)
}

export function useURL(){
    return useContext(URL)
}

function GlobalStateProvider({children}) {
    const [token, setToken] = useState("")
    const [url, setURL] = useState("https://7zc28f.deta.dev/")
    return ( 
        <Token.Provider value={token}>
            <UpdateToken.Provider value={setToken}>
                <URL.Provider value={url}>
                    {children}
                </URL.Provider>
            </UpdateToken.Provider>
        </Token.Provider>
     );
}

export default GlobalStateProvider;