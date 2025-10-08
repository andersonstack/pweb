import { MovieType } from "@/shared/types/movie-type"
import { TitleComponent } from "./Title";
import Link from "next/link";
import { urlHttps } from "@/lib/utils/adjustUrl";

interface CardComponentProps {
    movie: MovieType;
    href: string;
}

export function CardComponent({movie, href}: CardComponentProps) {
    return (
        <Link href={href}
            key={movie.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
        >
            <img
              src={urlHttps(movie.poster)}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <TitleComponent title={movie.title} />
              <div className="flex justify-between mt-2 text-gray-700 text-sm">
                <p>{movie.type}</p>
                <p>{movie.year}</p>
              </div>
            </div>
        </Link>
    )
}