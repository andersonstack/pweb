"use client";
import { MovieType } from "@/shared/types/movie-type";
import { searchMovies } from "../actions/searchMovies";
import { useApp } from "@/shared/context/AppContext";
import { ButtonForm } from "./ButtonForm";
import { memo } from "react";

export const Search = memo(function Search() {
  const { setMovies } = useApp();
  console.log("Montando o Search");

  async function handleSearch(formData: FormData) {
    const searchKey = formData.get("titleSearchKey") as string;
    const movies: MovieType[] = await searchMovies(searchKey);
    setMovies(movies);
  }

  return (
    <div className="flex justify-center items-center w-full bg-[#f8f6f1] p-4">
      <form
        action={handleSearch}
        className="flex flex-col gap-4 p-8 bg-[#fff8f0] border-2 border-[#ffe0c1] rounded-xl shadow-md w-80"
      >
        <label
          htmlFor="idTitleSearchKey"
          className="text-[#6b5e55] font-medium"
        >
          Título
        </label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          placeholder="Digite o título..."
          className="px-4 py-2 border text-black border-[#e2d6c6] rounded-lg bg-[#fffdf8] focus:outline-none focus:ring-2 focus:ring-[#ffcf99]"
        />
        <ButtonForm />
      </form>
    </div>
  );
});
