"use client";
import { useCallback } from "react";
import { AppProvider, useApp } from "@/shared/context/AppContext";
import HomeView from "@/features/movies/components/HomeView";
import { LinkToPage } from "@/shared/ui/LinkToPage";
import { Search } from "@/features/search/components/SearchForm";
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
        <LinkToPage route="/home/add" label="+ Adicionar novo filme" />
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
