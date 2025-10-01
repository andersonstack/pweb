"use client";

import { createContext, useContext, useState, ReactNode } from "react";
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

  return (
    <SearchContext.Provider value={{ search, setSearch, movies, setMovies }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("Use Context");
  return ctx;
}
