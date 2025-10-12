"use client";
import { useEffect, useState } from "react";
import { useApp } from "@/shared/context/AppContext";
import { fetchMovies } from "@/shared/services/fetchMovies";

export function usePagination() {
  const [loading, setLoading] = useState<boolean>(false);
  const { setMovies, page } = useApp();

  useEffect(() => {
    async function fetchMoviesData() {
      const url = `?page=${page}`;
      setLoading(true);
      try {
        const movies = await fetchMovies(url);
        setMovies(movies);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesData();
  }, [page, setMovies]);

  return { loading };
}
