import { createContext, useContext, useState } from "react";

export const NewRequestContext = createContext();

export function NewRequestProvider({ children }) {
    const [method, setMethod] = useState("");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");

    return <>
        <NewRequestContext.Provider value={{ method, setMethod, url, setUrl, body, setBody }}>{children}</NewRequestContext.Provider>
    </>;
}

export function useNewRequest() {
    return useContext(NewRequestContext);
}