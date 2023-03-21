import { createContext, useState } from "react";
import { globalState } from "./data";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
    const [initialState, setInitialState] = useState(globalState);

    return (
        <GlobalContext.Provider value={{ initialState, setInitialState }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext