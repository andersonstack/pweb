"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "../types/movie";

interface SearchContextType {
    search: string;
    setSearch: (value: string) => void;
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({children}: {children: ReactNode}) {
    const [search, setSearch] = useState("bagdad");
    const [movies, setMovies] = useState<Movie[]>([]);

    return (
        <SearchContext.Provider value={{search, setSearch, movies, setMovies}}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("Use Context");
    return ctx;
}