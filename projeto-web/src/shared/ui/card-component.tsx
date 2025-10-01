import { MovieType } from "@/shared/types/movie-type"
import { TitleComponent } from "./title-component";
import Link from "next/link";

interface CardComponentProps {
    movie: MovieType;
    href: string;
}

export function CardComponent({movie, href}: CardComponentProps) {
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
              <TitleComponent title={movie.Title} />
              <div className="flex justify-between mt-2 text-gray-700 text-sm">
                <p>{movie.Type}</p>
                <p>{movie.Year}</p>
              </div>
            </div>
        </Link>
    )
}