"use server" // Garante execução somente no servidor
import type { Movie } from "../types/movie";

export async function HomeService(
  page: number = 1,
  searchKey: string = "bagdad"
): Promise<Movie[]> {
  "use server";

  const res = await fetch(
    `http://localhost:3000/api?titleSearchKey=${encodeURIComponent(searchKey)}&page=${page}`,
    {cache: "no-store"}
  );
  const data = await res.json();
  return data?.Search || [];
}
