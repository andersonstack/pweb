"use server"

import { unstable_cache } from "next/cache";

const fetchFromOmdb = async (url: string) => {
  console.log("🔴 Chamando API externa:", url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao buscar dados na API externa.");
  return res.json();
};

export const getOmdbData = unstable_cache(
  async (url: string) => fetchFromOmdb(url),
  undefined,
  { revalidate: 60 * 60 * 24, tags: ["movies"] }
);
