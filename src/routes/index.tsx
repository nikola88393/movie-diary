import { createFileRoute } from '@tanstack/react-router'
import Hero from '#/components/home-page/Hero'
import Category from '#/components/home-page/Category'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Suspense } from 'react'
import { getPopularMoviesQuery, getPopularShowsQuery, getTopRatedMoviesQuery, getTopRatedShowsQuery } from '#/lib/queries'

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(getPopularMoviesQuery()),
      context.queryClient.ensureQueryData(getPopularShowsQuery()),
      context.queryClient.ensureQueryData(getTopRatedMoviesQuery()),
      context.queryClient.ensureQueryData(getTopRatedShowsQuery()),
    ])
  },
  component: App,
})

function App() {
  const trendingMovies = useSuspenseQuery(getPopularMoviesQuery())
  const trendingTVShows = useSuspenseQuery(getPopularShowsQuery())
  const topRatedMovies = useSuspenseQuery(getTopRatedMoviesQuery())
  const topRatedTVShows = useSuspenseQuery(getTopRatedShowsQuery())

  return (
    <main>
      <Hero movies={trendingMovies.data.results} />
      <Suspense fallback={<div>Loading...</div>}>
        <Category
          name="Trending Movies"
          movies={trendingMovies.data}
          querykey="popular"
        />
        <Category
          name="Trending TV Shows"
          shows={trendingTVShows.data}
          querykey="popular"
        />
        <Category
          name="Top Rated Movies"
          movies={topRatedMovies.data}
          querykey="top_rated"
        />
        <Category
          name="Top Rated TV Shows"
          shows={topRatedTVShows.data}
          querykey="top_rated"
        />
      </Suspense>
    </main>
  )
}