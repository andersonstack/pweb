"use client";
import { searchMovies } from "../../../app/actions/ServerActions";
import { useSearch } from "../context/SearchContext";
import { ButtonForm } from "./buttonForm";

export function Search() {
  const { setMovies } = useSearch();

  async function handleSearch(formData: FormData) {
    const searchKey = formData.get("titleSearchKey") as string;
    const movies = await searchMovies(searchKey); // chama a Server Action
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
}
