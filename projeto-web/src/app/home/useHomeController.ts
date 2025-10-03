"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// Hooks
import { useSearchMovies } from "./hooks/useSearchMovies";
// import { useSyncUrl } from "./hooks/use-SyncUrl";

export function useHomeController() {
  // const searchParams = useSearchParams();
  // const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(1);
  // console.log("Mounter HomeController");
  const {movies, loading, search} = useSearchMovies(page);
  // useSyncUrl(page, search), [page];

  return { page, setPage, movies, loading };
}
