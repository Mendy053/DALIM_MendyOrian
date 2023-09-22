import { createContext, useState, ReactNode, useContext } from "react";
import { getLocalStorage, saveLocalStorage } from "./utils";
import { URLS_KEY } from "./constants";
import { _Url_ } from "./models";

type UrlContextValue = {
   saveUrl?: (url: string) => void;
   urls: _Url_[];
   removeUrl?: (id: number) => void;
};

type UrlProviderProps = {
   children: ReactNode;
};

export const UrlContext = createContext<UrlContextValue>({
   urls: [],
});

export function UrlProvider(props: UrlProviderProps) {
   const [urls, setUrls] = useState<_Url_[]>(getLocalStorage(URLS_KEY) || []);

   function saveUrl(url: string): void {
      const newUrl: _Url_ = {
         id: Math.floor(Math.random() * 100000000000),
         url: url,
      };

      const updatedUrls = [...urls, newUrl];

      saveLocalStorage(URLS_KEY, updatedUrls);

      setUrls(updatedUrls);
   }

   function removeUrl(id: number) {
      const updatedUrls = urls.filter((item) => item.id !== id);

      saveLocalStorage(URLS_KEY, updatedUrls);

      setUrls(updatedUrls);
   }

   return <UrlContext.Provider value={{ saveUrl: saveUrl, urls: urls, removeUrl: removeUrl }}>{props.children}</UrlContext.Provider>;
}

export function useUrlContext(): UrlContextValue {
   return useContext(UrlContext);
}
