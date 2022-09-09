import React, { useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

  const login = (username, password) => {
    console.log("login", {username, password});
   
   

    const loggedUser = {
        username
    };
    localStorage.setItem('user', JSON.stringify(loggedUser));
    setUser(loggedUser) 
    navigate("/")
  }
        
  const logout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    setUser(null) // Dado fisico
    navigate("/");
  }

    return (
        <AuthContext.Provider 
            value={{authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}