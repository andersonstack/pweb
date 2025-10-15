import { unstable_cache } from "next/cache";

async function fetchUrl(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Erro ao buscar backend");
  return res.json();
}

export const getCachedMovies = unstable_cache(
  async (url: string) => fetchUrl(url),
  [],
  { tags: ["movies"], revalidate: 60 * 60 * 24 }
);
