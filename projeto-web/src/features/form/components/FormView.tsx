"use client";
import Link from "next/link";
import useHandleSubmit from "../hooks/useHandleSubmit";

export default function FormView() {
  const { values, handleChange, handleSubmit, posterPreview } = useHandleSubmit(
    { title: "", year: "", movie: false, series: false, poster: "" }
  );

  return (
    <>
      <Link href={"/home"}>Voltar para a home</Link>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-[#ffd8b5] rounded shadow text-[#5c4a3f]"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#5c4a3f]">
          Adicionar Mídia
        </h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-[#5c4a3f]">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-[#5c4a3f] bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-[#5c4a3f]">Ano</label>
          <input
            type="text"
            name="year"
            value={values.year}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-[#5c4a3f] bg-white"
          />
        </div>
        <div className="mb-4 flex justify-evenly" aria-label="Checkbox para tipo de mídia">
          <div aria-label="Checkbox para filme">
            <label className="block mb-1 font-medium text-[#5c4a3f]">
              Filme
            </label>
            <input
              type="checkbox"
              name="movie"
              checked={values.movie}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-[#5c4a3f] bg-white"
            />
          </div>
          <div aria-label="Checkbox para série">
            <label className="block mb-1 font-medium text-[#5c4a3f]">
              Série
            </label>
            <input
              type="checkbox"
              name="series"
              checked={values.series}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-[#5c4a3f] bg-white"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-[#5c4a3f]">
            Poster
          </label>
          <input
            type="text"
            placeholder="URL da imagem"
            name="poster"
            value={values.poster}
            onChange={handleChange}
            className="w-full rounded px-3 py-2 text-[#5c4a3f] bg-white"
          />
          {posterPreview && (
            <img
              src={values.poster}
              alt="Pré-visualização do Poster"
              className="mt-2 w-40 h-60 object-cover rounded shadow border"
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-[#5c4a3f] text-[#ffd8b5] px-4 py-2 rounded hover:bg-[#7a5e4a]"
        >
          Salvar
        </button>
      </form>
    </>
  );
}
