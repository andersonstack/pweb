"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { MovieType } from "@/shared/types/movie-type";

interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
  movies: MovieType[];
  setMovies: (movies: MovieType[]) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({
  children,
  initialMovies = [],
}: {
  children: ReactNode;
  initialMovies?: MovieType[];
}) {
  const [search, setSearch] = useState("bagdad");
  const [movies, setMovies] = useState<MovieType[]>(initialMovies);

  const contextValue = useMemo(
    () => ({ search, setSearch, movies, setMovies }),
    [search, movies]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("Use Context");
  return ctx;
}
