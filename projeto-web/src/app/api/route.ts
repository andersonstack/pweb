import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const titleSearchKey = searchParams.get("titleSearchKey");
  const page = searchParams.get("page") || "1";
  const id = searchParams.get("id");

  if (!id && !titleSearchKey) {
    return NextResponse.json(
      { error: "Parâmetros insuficientes" },
      { status: 400 }
    );
  };

  let url = `http://www.omdbapi.com/?apikey=b31c36d8`;

  if (id) url += `&i=${id}`;
  if (titleSearchKey) url += `&s=${titleSearchKey}&page=${page}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar dados" },
      { status: 500 }
    );
  }
}
