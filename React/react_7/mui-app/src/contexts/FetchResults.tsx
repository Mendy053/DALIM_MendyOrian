import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

export type FetchResultContextType = {
    fetchResult: string,
    setFetchResult: Dispatch<SetStateAction<string>>;
};

export const FetchResultContext = createContext<FetchResultContextType>({
    fetchResult: "",
    setFetchResult: () => { }
});

type ProviderProps = {
    children: ReactNode;
};

export function FetchResultProvider({ children }: ProviderProps) {
    const [fetchResult, setFetchResult] = useState<string>("");
    return < FetchResultContext.Provider value={{ fetchResult: fetchResult, setFetchResult: setFetchResult }} >
        {children}
    </FetchResultContext.Provider >;
}

export function useFetchResult() {
    return useContext(FetchResultContext);
}