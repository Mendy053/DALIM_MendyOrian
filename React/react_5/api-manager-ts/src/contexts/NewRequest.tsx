import { ReactNode, createContext, useContext, useState } from "react";

export const NewRequest = createContext<any>(null);

export function NewRequestProvider({ children }: { children: ReactNode; }) {
    const [method, setMethod] = useState("");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");
    const [result, setResult] = useState("");

    return <>
        <NewRequest.Provider value={{ method, setMethod, url, setUrl, body, setBody, result, setResult }}>
            {children}
        </NewRequest.Provider>
    </>;
}

export function useNewRequest() {
    return useContext(NewRequest);
}