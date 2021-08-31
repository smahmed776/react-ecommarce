import React, { useState, useEffect, createContext} from "react";

export const AuthContext = createContext();
export const IsAuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("auth")) || []);
    // const [Name, setName] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");

    // useEffect(()=>{
    //     console.log(user);
    // }, [user])

    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const IsAuthContextProvider = ({children}) => {
    const [isUser, setIsUser] = useState(JSON.parse(localStorage.getItem("isLogged")) || [false]);

    return (
        <IsAuthContext.Provider value={[isUser, setIsUser]}>
            {children}
        </IsAuthContext.Provider>
    )

}