import { createContext, useContext, useState } from "react";

export const ActionsContext = createContext();

export function ActionsProvider({ children }) {
    const [value, setValue] = useState([]);
    return <>
        <ActionsContext.Provider value={[value, setValue]}>{children}</ActionsContext.Provider>
    </>;
}

export function useActions() {
    return useContext(ActionsContext);
}