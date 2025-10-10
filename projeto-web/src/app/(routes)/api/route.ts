import { NextResponse } from "next/server";
import { getOmdbData } from "../../../lib/omdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const titleSearchKey = searchParams.get("titleSearchKey");
  const page = searchParams.get("page");

  let requestUrl = `http://localhost:3001/movies`;
  
  if (titleSearchKey) requestUrl += `?title=${titleSearchKey}`;
  if (page) requestUrl += `${titleSearchKey ? '&' : '?'}page=${page}`;

  try {
    const data = await fetch(requestUrl);
    const dataJson = await data.json();
    return NextResponse.json(dataJson);
  } catch {
    return NextResponse.json(
      { error: "Erro ao buscar dados" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { title, year, type, poster } = await req.json();
  let requestUrl = `http://localhost:3001/movies`;

  try {
    const data = await fetch(`${requestUrl}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, year, type, poster }),
    });
    const dataJson = await data.json();
    return NextResponse.json(
      {data: dataJson},
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: "Erro ao adicionar um novo filme",
      },
      {
        status: 500,
      }
    );
  }
}
