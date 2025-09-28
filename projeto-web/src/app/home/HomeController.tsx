"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSearch } from "../context/SearchContext";

export function HomeController(searchForm: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const { setMovies, movies } = useSearch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(pageFromUrl);

  useEffect(() => {
    setLoading(true);
    function fetchMovies() {
      if (!searchForm) return;
      fetch(
        `http://localhost:3000/api?titleSearchKey=${encodeURIComponent(
          searchForm
        )}&page=${page}`,
        { cache: "no-store" }
      )
        .then((res) => res.json())
        .finally(() => {
            setLoading(false);
            setMovies(movies);
        });
    }
    fetchMovies();
  }, [searchForm, page]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    params.set("titleSearchKey", searchForm);
    router.replace(`?${params.toString()}`);
  }, [page, searchForm]);

  return { page, setPage, movies, loading };
}
