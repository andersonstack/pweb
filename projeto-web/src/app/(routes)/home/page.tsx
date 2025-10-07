"use client"
import { AppProvider } from "@/shared/context/AppContext"
import { Search } from "@/features/search/components/SearchForm"
import HomeView from "@/features/movies/components/HomeView"
import { MovieType } from "../../../shared/types/movie-type"
import useInitialsMovies from "../../../features/movies/hooks/use-InitialMovies"
import { memo } from "react"

export default function Home(){
  const movies: MovieType[] = useInitialsMovies();
  return (
    <AppProvider initialMovies={movies}>
      <Search />
      <HomeView />
    </AppProvider>
  )
}
