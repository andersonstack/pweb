"use client";
import { AppProvider } from "@/shared/context/AppContext";
import { Search } from "@/features/search/components/SearchForm";
import HomeView from "@/features/movies/components/HomeView";
import { MovieType } from "../../../shared/types/movie-type";
import useInitialsMovies from "@/features/movies/hooks/useInitialMovies";
import Link from "next/link";

export default function Home() {
  const movies: MovieType[] = useInitialsMovies();

  return (
    <AppProvider initialMovies={movies}>
      <div>
        <Search />  
        <Link
          href={"/home/add"}
          className="bg-primary text-[1.5rem] px-[1rem] cursor-pointer"
        >
          {" "}
          + Adicionar novo filme
        </Link>
      </div>
      <HomeView />
    </AppProvider>
  );
}
