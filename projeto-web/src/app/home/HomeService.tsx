import { Service } from "../service/service";
import type { Movie } from "../interfaces/interfaces";

export async function HomeService(page:number, query: string): Promise<Movie[]> {
    const data = await Service({
        searchParams: {page: page.toString(), titleSearchKey: query},
    });
    return data?.Search || [];
}
