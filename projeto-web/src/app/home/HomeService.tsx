"use service" // Garante execução somente no servidor

import type { Movie } from "../interfaces/interfaces";

export async function HomeService(
  page: number,
  query: string
): Promise<Movie[]> {
  const res = await fetch(
    `/api?titleSearchKey=${encodeURIComponent(query)}&page=${page}`
  );
  const data = await res.json();
  return data?.Search || [];
}
