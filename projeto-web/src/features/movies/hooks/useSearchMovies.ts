"use client";
import { useEffect, useState } from "react";
import { useApp } from "@/shared/context/AppContext";
import { fetchMovies } from "@/shared/services/fetchMovies";

export function useSearchMovies() {
  const [loading, setLoading] = useState<boolean>(false);
  const { setMovies, movies, search, page } = useApp();

  useEffect(() => {
    async function fetchMoviesData() {
      if (!search) return;
      setLoading(true);
      try {
        const movies = await fetchMovies(`titleSearchKey=${encodeURIComponent(search)}&page=${page}`);
        setMovies(movies);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesData();
  }, [search, page, setMovies]);

  return { movies, loading, search };
}
