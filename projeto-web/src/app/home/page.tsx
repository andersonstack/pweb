"use client"
import { useEffect } from "react"
import { SearchProvider } from "../middleware/SearchContext"
import { MovieForm } from "@/components/movieSearch"
import HomeView from "./HomeView"

export default function Home(){
  useEffect(() => {
    console.log("Reset Home - (mount)");
  }, []);
  return (
    <SearchProvider>
      <MovieForm />
      <HomeView />
    </SearchProvider>
  )
}