import type { TmdbDiscoverMovieResponse, TmdbDiscoverTvResponse } from "#/services/tmdb-api/tmdb.types"
import MovieCard from "../MovieCard"
import { Link } from "@tanstack/react-router"

export default function Category({
  name,
  querykey,
  movies,
  shows,
}: {
  name: string
  querykey: string
  movies?: TmdbDiscoverMovieResponse
  shows?: TmdbDiscoverTvResponse
}) {
  console.log(`Rendering category: ${querykey}`)
  return (
    <div className="flex-col mt-18 mb-18 w-6xl mr-auto ml-auto items-center justify-center">
      <h2 className="text-4xl font-bold border-b">{name}</h2>
      <Link to={`/category/$type/$categoryId`} params={{ type: shows ? "tv" : "movie", categoryId: querykey }} className="text-(--lagoon-deep) hover:underline cursor-pointer">
        View All &gt;
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movies?.results.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
        {shows?.results.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
