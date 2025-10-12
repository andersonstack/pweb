"use client";
import { useCallback } from "react";
import { AppProvider, useApp } from "@/shared/context/AppContext";
import HomeView from "@/features/movies/components/HomeView";
import { Search } from "@/features/search/components/SearchForm";
import Link from "next/link";
import { fetchMovies } from "@/shared/services/fetchMovies";

function HomeContent() {
  const { setMovies } = useApp();

  const handleSearch = useCallback(
    async (searchKey: string) => {
      const movies = await fetchMovies(`?titleSearchKey=${searchKey}`);
      setMovies([movies]);
    },
    [setMovies]
  );

  return (
    <>
      <div>
        <Search onSearch={handleSearch} />
        <Link
          href={"/home/add"}
          className="bg-primary text-[1.5rem] px-[1rem] cursor-pointer"
        >
          + Adicionar novo filme
        </Link>
      </div>
      <HomeView />
    </>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <HomeContent />
    </AppProvider>
  );
}
