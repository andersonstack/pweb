"use client";

import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";
import { MovieType } from "@/shared/types/movie-type";

interface AppContextType {
  movies: MovieType[];
  setMovies: (movies: MovieType[]) => void;
  page: number;
  setPage: (page: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({
  children,
  initialMovies = [],
}: {
  children: ReactNode;
  initialMovies?: MovieType[];
}) {
  const [movies, setMovies] = useState<MovieType[]>(initialMovies);
  const [page, setPage] = useState(1);

  const contextValue = useMemo(
    () => ({ movies, setMovies, page, setPage }),
    [movies, page]
  );

  useEffect(() => {
    if (initialMovies.length > 0) {
      setMovies(initialMovies);
    }
  }, [initialMovies]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
