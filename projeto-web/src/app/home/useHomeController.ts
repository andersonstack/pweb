"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
// Hooks
import { useSearchMovies } from "./hooks/useSearchMovies";
import { useSyncUrl } from "./hooks/use-SyncUrl";

export function useHomeController() {
  const searchParams = useSearchParams();
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(pageFromUrl);

  const {movies, loading, search} = useSearchMovies(page);
  useSyncUrl(page, search);

  return { page, setPage, movies, loading };
}
