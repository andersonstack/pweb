"use client";
import { useEffect, useState } from "react";
import { useApp } from "@/shared/context/AppContext";
import { fetchMovies } from "@/shared/services/fetchMovies";


export function usePagination(setDisabledAfter: React.Dispatch<React.SetStateAction<boolean>>) {
  const [loading, setLoading] = useState(false);
  const { setMovies, page } = useApp();

  useEffect(() => {
    async function fetchMoviesData() {
      setLoading(true);
      try {
        const url = `?page=${page}`;
        const movies = await fetchMovies(url);

        if (!movies || movies.length === 0) {
          setDisabledAfter(true);  
        } else {
          setDisabledAfter(false); 
          setMovies(movies);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesData();
  }, [page, setMovies, setDisabledAfter]);

  return { loading };
}

