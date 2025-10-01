import { SearchProvider } from "@/modules/search/context/SearchContext"
import { Search } from "@/modules/search/components/search"
import HomeView from "./HomeView"
import { MovieType } from "../../shared/types/movie-type"
import { HomeService } from "./HomeService"

export default async function Home(){
  const movies: MovieType[] = await HomeService();
  return (
    <SearchProvider initialMovies={movies}>
      <Search />
      <HomeView />
    </SearchProvider>
  )
}
