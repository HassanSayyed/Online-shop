import { createContext, useState , useEffect} from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children}) => {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
};

export default AppContext;
