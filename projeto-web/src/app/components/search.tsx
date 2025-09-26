"use client";

import { FormEvent, KeyboardEvent, useRef, useEffect } from "react";
import { useSearch } from "@/app/context/SearchContext";

export function Search() {
  useEffect(() => {
    console.log("Mount Search");
  }, []);

  const { setSearch } = useSearch();
  const { disabled, setDisabled } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const search = inputRef.current?.value || "";
    if (search) {
      setSearch(search);
      inputRef.current!.value = "";
      setDisabled(true);
    }
  }

  return (
    <div className="flex justify-center items-center w-full bg-[#f8f6f1] p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 bg-[#fff8f0] border-2 border-[#ffe0c1] rounded-xl shadow-md w-80"
      >
        <label
          htmlFor="idTitleSearchKey"
          className="text-[#6b5e55] font-medium"
        >
          Título
        </label>
        <input
          ref={inputRef}
          id="idTitleSearchKey"
          name="titleSearchKey"
          placeholder="Digite o título..."
          className="px-4 py-2 border text-black border-[#e2d6c6] rounded-lg bg-[#fffdf8] focus:outline-none focus:ring-2 focus:ring-[#ffcf99]"
        />
        <button
          disabled={disabled}
          type="submit"
          className="bg-[#ffd8b5] text-[#5c4a3f] py-2 px-4 rounded-lg font-semibold hover:bg-[#ffc999] transition-colors disabled:cursor-not-allowed"
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
}
