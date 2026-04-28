import { Link } from '@tanstack/react-router'
import GridMotion from '../GridMotion'
import { Button } from '../ui/button'
import type { TmdbDiscoverMovieResult } from '#/services/tmdb-api/tmdb.types'

export default function Hero({
  movies,
}: {
  movies: TmdbDiscoverMovieResult[] | Error
}) {
  if (movies instanceof Error) {
	return (
	  <section className="w-full h-dvh flex items-center justify-center">
		<p className="text-sm text-white/80">Failed to load</p>
	  </section>
	)
  }
  console.log(movies)
  const heroPosters = movies.map(
	(movie) => `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
  )

  return (
    <section className="w-full h-dvh">
      <div className="relative isolate overflow-hidden shadow-[0_22px_54px_rgba(20,56,63,0.22)]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <GridMotion
            items={[...heroPosters, ...heroPosters]}
            gradientColor="rgba(10, 24, 28, 0.9)"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/46 via-black/54 to-black/72" />

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 py-14 text-center sm:min-h-[100vh] sm:px-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-[color:var(--lagoon)] uppercase sm:text-sm">
              Find Your Next Favorite Movie
            </p>

            <h1 className="display-title text-4xl leading-[0.98] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover stories worth your time
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-lg">
              Personalized picks, surprise recommendations, and a watchlist you
              can keep coming back to.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/sign-up">Start Exploring</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/50 bg-white/12 px-8 text-white hover:bg-white/22 hover:text-white"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
