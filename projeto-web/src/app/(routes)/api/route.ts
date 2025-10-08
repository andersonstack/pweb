import { NextResponse } from "next/server";
import { getOmdbData } from "../../../lib/omdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const titleSearchKey = searchParams.get("titleSearchKey");
  const page = searchParams.get("page");

  let url = `http://localhost:3001/movies`;

  if (titleSearchKey) url += `?title=${titleSearchKey}`;
  if (page) url += `?page=${page}`;

  try {
    const data = await fetch(url);
    const dataJson = await data.json();
    return NextResponse.json(dataJson);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar dados" },
      { status: 500 }
    );
  }
}
