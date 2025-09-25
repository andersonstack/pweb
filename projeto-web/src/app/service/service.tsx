import type { Movie } from "../interfaces/interfaces"

interface ServiceProps {
    searchParams?: any
}

export async function Service({searchParams}: ServiceProps = {}) {
    const {titleSearchKey = 'bagdad'} =  searchParams ?? {}
    const {page = '1'} = searchParams ?? {}
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b31c36d8&s=${titleSearchKey}&page=${page}`)
    const data = await res.json()

    return data
}

export async function FetchMovies(page:number, query: string): Promise<Movie[]> {
    const data = await Service({
        searchParams: {page: page.toString(), titleSearchKey: query},
    });
    return data?.Search || [];
}
