import { createContext, useState, ReactNode, useContext } from "react";
import { getLocalStorage, saveLocalStorage } from "./utils";
import { URLS_KEY } from "./constants";

type UrlContextValue = {
   saveUrl?: (url: string) => void;
   urls: string[];
};

type UrlProviderProps = {
   children: ReactNode;
};

export const UrlContext = createContext<UrlContextValue>({
   urls: [],
});

export function UrlProvider(props: UrlProviderProps) {
   const [urls, setUrls] = useState<string[]>(getLocalStorage(URLS_KEY) || []);

   function saveUrl(url: string): void {
      const updatedUrls = [...urls, url];

      setUrls(updatedUrls);

      saveLocalStorage(URLS_KEY, updatedUrls);
   }

   return <UrlContext.Provider value={{ saveUrl: saveUrl, urls: urls }}>{props.children}</UrlContext.Provider>;
}

export function useUrlContext(): UrlContextValue {
   return useContext(UrlContext);
}
