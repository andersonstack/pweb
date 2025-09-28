import { SearchProvider } from "../context/SearchContext"
import { Search } from "@/app/components/search"
import HomeView from "./HomeView"
import { Movie } from "../types/movie"
import { HomeService } from "./HomeService"

export default async function Home(){
  const movies: Movie[] = await HomeService();
  return (
    <SearchProvider initialMovies={movies}>
      <Search />
      <HomeView />
    </SearchProvider>
  )
}
