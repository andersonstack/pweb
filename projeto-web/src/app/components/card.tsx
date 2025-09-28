import { Movie } from "@/app/types/movie"
import { Title } from "./title";
import Link from "next/link";

interface CardProps {
    movie: Movie;
    href: string;
}

export function Card({movie, href}: CardProps) {
    return (
        <Link href={href}
            key={movie.imdbID}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={movie.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <Title title={movie.Title} />
              <div className="flex justify-between mt-2 text-gray-700 text-sm">
                <p>{movie.Type}</p>
                <p>{movie.Year}</p>
              </div>
            </div>
        </Link>
    )
}