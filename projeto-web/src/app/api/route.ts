import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const titleSearchKey = searchParams.get("titleSearchKey") || "bagdad";
    const page = searchParams.get("page") || "1";

    try {
      const res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=b31c36d8&s=${titleSearchKey}&page=${page}`
      );
      const data = await res.json();

      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json(
        { error: "Erro ao buscar dados" },
        { status: 500 }
      );
    }
}
