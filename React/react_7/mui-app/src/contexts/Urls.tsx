import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { GetFromLocalStorage } from "../Helpers";
import { LS_URLS_KEY } from "../primary-constants";

type UrlEntityType = {
    id: string,
    url: string;
};

export type UrlsContextType = {
    urls: UrlEntityType[],
    setUrls: Dispatch<SetStateAction<UrlEntityType[]>>;
};

export const UrlsContext = createContext<UrlsContextType>({ urls: [], setUrls: () => { } });

type ProviderProps = {
    children: ReactNode;
};

export function UrlsProvider({ children }: ProviderProps) {
    const [urls, setUrls] = useState<UrlEntityType[]>(JSON.parse(GetFromLocalStorage(LS_URLS_KEY)));

    return (
        <UrlsContext.Provider value={{ urls: urls, setUrls: setUrls }}>
            {children}
        </UrlsContext.Provider>
    );
}

export function useUrls() {
    return useContext(UrlsContext);
}