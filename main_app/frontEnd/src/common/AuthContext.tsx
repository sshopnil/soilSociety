import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthProps {
    email: string
    isLoggedIn: boolean,
    setLoggedIn: (isset: boolean) => void,
    setLogin:()=> void,
    setLogout:()=> void,
    emailSet:(mail: string)=> void
}

const AuthContext = createContext<AuthProps | undefined>(undefined);



const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be within the app');
    }
    return context;
};


const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const setLogin = () => {
        setLoggedIn(true);
    };

    const setLogout = () => {
        setLoggedIn(false);
    };
    const emailSet=(usrmail: string)=>{
        setEmail(usrmail);
    }

    const contextValue: AuthProps = {
        emailSet, 
        email,
        isLoggedIn,
        setLoggedIn,
        setLogin,
        setLogout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, useAuth };
