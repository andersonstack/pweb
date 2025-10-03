"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSearch } from "@/modules/search/context/SearchContext";

export function useHomeController() {
  const [loading, setLoading] = useState<boolean>(false);
  const { setMovies, movies, search } = useSearch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(pageFromUrl);
  // console.log("Mounter HomeController");

  useEffect(() => {
    setLoading(true);
    function fetchMovies() {
      if (!search) return;
      fetch(
        `http://localhost:3000/api?titleSearchKey=${encodeURIComponent(
          search
        )}&page=${page}`,
        { cache: "no-store" }
      )
        .then((res) => {
          res.json().then((res) => setMovies(res.Search));
        })
        .finally(() => setLoading(false));
    }
    fetchMovies();
  }, [search, page]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const currentPage = params.get("page");
    const currentSearch = params.get("titleSearchKey");

    if (currentPage !== page.toString() || currentSearch !== search) {
      params.set("page", page.toString());
      params.set("titleSearchKey", search);
      router.replace(`?${params.toString()}`);
    }
  }, [page, search, searchParams, router]);

  return { page, setPage, movies, loading };
}
