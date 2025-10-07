"use client"
import { SearchProvider } from "@/modules/search/context/SearchContext"
import { Search } from "@/modules/search/components/SearchForm"
import HomeView from "./HomeView"
import { MovieType } from "../../shared/types/movie-type"
import useInitialsMovies from "./hooks/use-InitialMovies"
import { memo } from "react"

export default function Home(){
  const movies: MovieType[] = useInitialsMovies();
  return (
    <SearchProvider initialMovies={movies}>
      <Search />
      <HomeView />
    </SearchProvider>
  )
}
