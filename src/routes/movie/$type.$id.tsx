import { getDetailsQuery } from '#/lib/queries'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Card, CardHeader, CardTitle, CardDescription } from '#/components/ui/card'
import { Badge } from '#/components/ui/badge'
import { Separator } from '#/components/ui/separator'
import type { TmdbMovieDetails, TmdbTvDetails } from '#/services/tmdb-api/tmdb.types'

export const Route = createFileRoute('/movie/$type/$id')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    const { id, type } = params
    context.queryClient.ensureQueryData(getDetailsQuery(Number(id), type as 'movie' | 'tv'))
  },
})

function RouteComponent() {
  const { id, type } = Route.useParams()
  const { data, isPending } = useQuery(getDetailsQuery(Number(id), type as 'movie' | 'tv'))

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">No data found</p>
      </div>
    )
  }

  const isMovie = type === 'movie'
  const details = data as TmdbMovieDetails | TmdbTvDetails

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      {details.backdrop_path && (
        <div className="relative w-full h-90 overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
            alt={isMovie ? (details as TmdbMovieDetails).title : (details as TmdbTvDetails).name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Title and Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Poster */}
          {details.poster_path && (
            <div className="md:col-span-1">
              <img
                src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
                alt={isMovie ? (details as TmdbMovieDetails).title : (details as TmdbTvDetails).name}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          )}

          {/* Details */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <h1 className="text-4xl font-bold">
                {isMovie ? (details as TmdbMovieDetails).title : (details as TmdbTvDetails).name}
              </h1>
              {isMovie && (details as TmdbMovieDetails).original_title && (
                <p className="text-muted-foreground">
                  Original: {(details as TmdbMovieDetails).original_title}
                </p>
              )}
              {!isMovie && (details as TmdbTvDetails).original_name && (
                <p className="text-muted-foreground">
                  Original: {(details as TmdbTvDetails).original_name}
                </p>
              )}
            </div>

            {/* Rating and Info */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-yellow-500">★</span>
                <span className="text-lg font-semibold">{details.vote_average.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">({details.vote_count.toLocaleString()} votes)</span>
              </div>

              {isMovie ? (
                <>
                  <span className="text-sm text-muted-foreground">
                    {new Date((details as TmdbMovieDetails).release_date).getFullYear()}
                  </span>
                  {(details as TmdbMovieDetails).runtime > 0 && (
                    <span className="text-sm text-muted-foreground">
                      {(details as TmdbMovieDetails).runtime} min
                    </span>
                  )}
                </>
              ) : (
                <>
                  <span className="text-sm text-muted-foreground">
                    {new Date((details as TmdbTvDetails).first_air_date).getFullYear()}
                  </span>
                  {(details as TmdbTvDetails).status && (
                    <Badge variant="outline">{(details as TmdbTvDetails).status}</Badge>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {(details as TmdbTvDetails).number_of_seasons} season{(details as TmdbTvDetails).number_of_seasons !== 1 ? 's' : ''}
                  </span>
                </>
              )}
            </div>

            {/* Genres */}
            {details.genres.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {details.genres.map((genre) => (
                  <Badge key={genre.id} variant="secondary">
                    {genre.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Tagline */}
            {details.tagline && (
              <p className="text-lg italic text-muted-foreground">"{details.tagline}"</p>
            )}
          </div>
        </div>

        <Separator />

        {/* Overview */}
        {details.overview && (
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <div className="px-6 pb-6">
              <p className="text-foreground leading-relaxed">{details.overview}</p>
            </div>
          </Card>
        )}

        {/* Movie Specific Info */}
        {isMovie && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {((details as TmdbMovieDetails).budget > 0 || (details as TmdbMovieDetails).revenue > 0) && (
              <Card>
                <CardHeader>
                  <CardTitle>Budget & Revenue</CardTitle>
                </CardHeader>
                <div className="px-6 pb-6 space-y-2">
                  {(details as TmdbMovieDetails).budget > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="text-lg font-semibold">
                        ${((details as TmdbMovieDetails).budget / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  )}
                  {(details as TmdbMovieDetails).revenue > 0 && (
                    <div>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="text-lg font-semibold">
                        ${((details as TmdbMovieDetails).revenue / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {(details as TmdbMovieDetails).homepage && (
              <Card>
                <CardHeader>
                  <CardTitle>Links</CardTitle>
                </CardHeader>
                <div className="px-6 pb-6">
                  <a
                    href={(details as TmdbMovieDetails).homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline break-all"
                  >
                    {(details as TmdbMovieDetails).homepage}
                  </a>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* TV Specific Info */}
        {!isMovie && (
          <div className="space-y-6">
            {(details as TmdbTvDetails).networks && (details as TmdbTvDetails).networks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Networks</CardTitle>
                </CardHeader>
                <div className="px-6 pb-6 flex flex-wrap gap-4">
                  {(details as TmdbTvDetails).networks.map((network) => (
                    <div key={network.id} className="flex items-center gap-2">
                      {network.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/original${network.logo_path}`}
                          alt={network.name}
                          className="h-8"
                        />
                      )}
                      <span>{network.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {(details as TmdbTvDetails).seasons && (details as TmdbTvDetails).seasons.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Seasons</CardTitle>
                </CardHeader>
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(details as TmdbTvDetails).seasons.map((season) => (
                      <div key={season.id} className="border rounded-lg p-4 space-y-2">
                        {season.poster_path && (
                          <img
                            src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                            alt={season.name}
                            className="w-full rounded"
                          />
                        )}
                        <h4 className="font-semibold">{season.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {season.episode_count} episode{season.episode_count !== 1 ? 's' : ''}
                        </p>
                        {season.air_date && (
                          <p className="text-xs text-muted-foreground">
                            {new Date(season.air_date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Production Companies */}
        {details.production_companies && details.production_companies.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Production</CardTitle>
            </CardHeader>
            <div className="px-6 pb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {details.production_companies.map((company) => (
                <div key={company.id} className="text-center">
                  {company.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                      alt={company.name}
                      className="h-12 mx-auto mb-2 object-contain"
                    />
                  )}
                  <p className="text-sm">{company.name}</p>
                  {company.origin_country && (
                    <p className="text-xs text-muted-foreground">{company.origin_country}</p>
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Languages */}
        {details.spoken_languages && details.spoken_languages.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <div className="px-6 pb-6 flex flex-wrap gap-2">
              {details.spoken_languages.map((lang) => (
                <Badge key={lang.iso_639_1} variant="outline">
                  {lang.english_name}
                </Badge>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
