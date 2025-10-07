"use client";
import { useFormStatus } from "react-dom";

export function ButtonForm() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-[#ffd8b5] text-[#5c4a3f] py-2 px-4 rounded-lg font-semibold hover:bg-[#ffc999] transition-colors disabled:cursor-not-allowed"
    >
      {pending ? "Carregando..." : "Pesquisar"}
    </button>
  );
}
