"use client";
import { useEffect, useState } from "react";
import { useApp } from "@/shared/context/AppContext";

export function useSearchMovies() {
  const [loading, setLoading] = useState<boolean>(false);
  const { setMovies, movies, search, page } = useApp();

  useEffect(() => {
    async function fetchMovies() {
      if (!search) return;
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/api?titleSearchKey=${encodeURIComponent(
            search
          )}&page=${page}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setMovies(data.Search);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [search, page, setMovies]);

  return { movies, loading, search };
}
