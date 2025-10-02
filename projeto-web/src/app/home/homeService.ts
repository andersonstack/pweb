"use server" // Garante execução somente no servidor
import type { MovieType } from "../../shared/types/movie-type";

export async function getMoviesInitialsForHome(
  page: number = 1,
  searchKey: string = "bagdad"
): Promise<MovieType[]> {
  "use server";

  const res = await fetch(
    `http://localhost:3000/api?titleSearchKey=${encodeURIComponent(searchKey)}&page=${page}`,
    {cache: "no-store"}
  );
  const data = await res.json();
  return data?.Search || [];
}
