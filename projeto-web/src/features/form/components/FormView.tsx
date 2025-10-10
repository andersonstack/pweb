"use client";
import Link from "next/link";
import useHandleSubmit from "../hooks/useHandleSubmit";

export default function FormView() {
  const { values, handleChange, handleSubmit, posterPreview } = useHandleSubmit(
    { title: "", year: "", movie: false, series: false, poster: "" }
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#ffd8b5] to-[#fff3e0] py-8">
      <div className="w-full max-w-lg bg-white/80 rounded-2xl shadow-2xl p-8">
        <Link
          href={"/home"}
          className="inline-block mb-6 text-[#5c4a3f] hover:underline transition"
        >
          ← Voltar para a home
        </Link>
        <form onSubmit={handleSubmit} autoComplete="off">
          <h2 className="text-3xl font-extrabold mb-8 text-[#5c4a3f] text-center tracking-tight">
            Adicionar Mídia
          </h2>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#5c4a3f]">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              className="w-full border-2 border-[#ffd8b5] focus:border-[#5c4a3f] rounded-lg px-4 py-2 text-[#5c4a3f] bg-white shadow-sm focus:outline-none transition"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#5c4a3f]">Ano</label>
            <input
              type="text"
              name="year"
              value={values.year}
              onChange={handleChange}
              className="w-full border-2 border-[#ffd8b5] focus:border-[#5c4a3f] rounded-lg px-4 py-2 text-[#5c4a3f] bg-white shadow-sm focus:outline-none transition"
            />
          </div>
          <div className="mb-6 flex gap-6 justify-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="movie"
                checked={values.movie}
                onChange={handleChange}
                className="accent-[#5c4a3f] w-5 h-5"
              />
              <span className="font-semibold text-[#5c4a3f]">Filme</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="series"
                checked={values.series}
                onChange={handleChange}
                className="accent-[#5c4a3f] w-5 h-5"
                required
              />
              <span className="font-semibold text-[#5c4a3f]">Série</span>
            </label>
          </div>
          <div className="mb-8">
            <label className="block mb-2 font-semibold text-[#5c4a3f]">
              Poster (URL)
            </label>
            <input
              type="text"
              placeholder="Cole a URL da imagem"
              name="poster"
              value={values.poster}
              onChange={handleChange}
              className="w-full border-2 border-[#ffd8b5] focus:border-[#5c4a3f] rounded-lg px-4 py-2 text-[#5c4a3f] bg-white shadow-sm focus:outline-none transition"
            />
            {posterPreview && (
              <div className="flex justify-center mt-4">
                <img
                  src={values.poster}
                  alt="Pré-visualização do Poster"
                  className="w-40 h-60 object-cover rounded-xl shadow-lg border-2 border-[#ffd8b5] hover:scale-105 transition-transform duration-200"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#5c4a3f] to-[#a67c52] text-[#ffd8b5] font-bold text-lg shadow-md hover:from-[#7a5e4a] hover:to-[#5c4a3f] transition"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}