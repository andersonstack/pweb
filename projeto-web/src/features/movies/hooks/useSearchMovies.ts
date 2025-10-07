"use client";
import { useEffect, useState } from "react";
import { useSearch } from "@/features/search/context/SearchContext";

export function useSearchMovies(page: number) {
  const [loading, setLoading] = useState<boolean>(false);
  const { setMovies, movies, search } = useSearch();

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
