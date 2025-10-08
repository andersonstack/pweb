import type { MovieType } from "@/shared/types/movie-type";
import { urlHttps } from "@/lib/utils/adjustUrl";
import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/movies");
  const data = await res.json();

  return data.Search.map((movie: MovieType) => ({
    id: movie.id,
  }));
}

async function getMovie(id: string): Promise<MovieType> {
  const res = await fetch(`http://localhost:3001/movies?id=${id}`);
  const resJson = await res.json();
  return resJson.Search;
}

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie = await getMovie(id);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div
        id={movie.id}
        className="bg-white shadow-xl rounded-2xl p-6 max-w-md w-full text-center"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{movie.title}</h1>
        <img
          src={urlHttps(movie.poster)}
          alt={movie.title}
          className="w-full h-auto rounded-lg shadow mb-4"
        />
        <p className="text-gray-600">
          <span className="font-semibold">Tipo:</span> {movie.type}
        </p>
        <p className="text-gray-600 mb-6">
          <span className="font-semibold">Ano:</span> {movie.year}
        </p>
        <Link
          href="/home"
          className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          {" "}
          ⬅ Voltar para Home{" "}
        </Link>
      </div>
    </main>
  );
}
