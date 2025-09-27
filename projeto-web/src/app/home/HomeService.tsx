"use server" // Garante execução somente no servidor
import type { Movie } from "../types/movie";

export async function HomeService(
  page: number,
  searchKey: string
): Promise<Movie[]> {
  "use server";
  const res = await fetch(
    `http://localhost:3000/api?titleSearchKey=${encodeURIComponent(searchKey)}&page=${page}`
  );
  const data = await res.json();
  return data?.Search || [];
}
