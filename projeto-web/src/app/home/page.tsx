"use client"
import { SearchProvider } from "../context/SearchContext"
import { Search } from "@/components/search"
import HomeView from "./HomeView"

export default function Home(){
  return (
    <SearchProvider>
      <Search />
      <HomeView />
    </SearchProvider>
  )
}
