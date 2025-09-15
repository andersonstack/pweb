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