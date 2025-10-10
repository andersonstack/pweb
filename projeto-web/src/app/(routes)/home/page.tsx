"use client";
import { AppProvider } from "@/shared/context/AppContext";
import { Search } from "@/features/search/components/SearchForm";
import HomeView from "@/features/movies/components/HomeView";
import Link from "next/link";

export default function Home() {
  return (
    <AppProvider>
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
