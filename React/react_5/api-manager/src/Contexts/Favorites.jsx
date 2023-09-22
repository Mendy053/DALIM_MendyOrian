import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    
    return <>
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>{children}</FavoritesContext.Provider>
    </>;
};

export function useFavorites() {
    return useContext(FavoritesContext);
}