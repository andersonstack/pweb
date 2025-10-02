import { SearchProvider } from "@/modules/search/context/SearchContext"
import { Search } from "@/modules/search/components/SearchForm"
import HomeView from "./HomeView"
import { MovieType } from "../../shared/types/movie-type"
import { getMoviesInitialsForHome } from "./homeService"

export default async function Home(){
  const movies: MovieType[] = await getMoviesInitialsForHome();
  return (
    <SearchProvider initialMovies={movies}>
      <Search />
      <HomeView />
    </SearchProvider>
  )
}
