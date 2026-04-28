import { createServerFn } from '@tanstack/react-start'
import type {
  TmdbDiscoverMovieQueryParams,
  TmdbDiscoverMovieResponse,
  TmdbDiscoverTvQueryParams,
  TmdbDiscoverTvResponse,
  TmdbGenreRequestResult,
} from './tmdb.types'

type GenreType = 'movie' | 'tv'

const fetcher = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
  })
  console.log(response)
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`)
  }
  return await response.json()
}

export const getGenres = createServerFn({ method: 'GET' })
  .inputValidator((data: GenreType) => data)
  .handler(
    async ({
      data: type,
    }: {
      data: GenreType
    }): Promise<TmdbGenreRequestResult> =>
      fetcher(`https://api.themoviedb.org/3/genre/${type}/list?language=en`),
  )

export const getMovies = createServerFn({ method: 'GET' })
  .inputValidator((data: TmdbDiscoverMovieQueryParams) => data)
  .handler(
    async ({
      data,
    }: {
      data: TmdbDiscoverMovieQueryParams
    }): Promise<TmdbDiscoverMovieResponse> => {
      const query = new URLSearchParams(
        Object.entries(data as Record<string, unknown>).reduce(
          (acc, [key, value]) => {
            if (value !== undefined && value !== null) {
              acc[key] = String(value)
            }
            return acc
          },
          {} as Record<string, string>,
        ),
      ).toString()

      return fetcher(`https://api.themoviedb.org/3/discover/movie?${query}`)
    },
  )

  export const getShows = createServerFn({ method: 'GET' })
  .inputValidator((data: TmdbDiscoverTvQueryParams) => data)
  .handler(
    async ({
      data,
    }: {
      data: TmdbDiscoverTvQueryParams
    }): Promise<TmdbDiscoverTvResponse> => {
      const query = new URLSearchParams(
        Object.entries(data as Record<string, unknown>).reduce(
          (acc, [key, value]) => {
            if (value !== undefined && value !== null) {
              acc[key] = String(value)
            }
            return acc
          },
          {} as Record<string, string>,
        ),
      ).toString()

      return fetcher(`https://api.themoviedb.org/3/discover/tv?${query}`)
    },
  )

  export const getDetails = createServerFn({ method: 'GET' })
  .inputValidator((data: { id: number, type: 'tv' | 'movie' }) => data)
  .handler(
    async ({
      data,
    }: {
      data: { id: number, type: 'tv' | 'movie' }
    }): Promise<any> => {
      return fetcher(`https://api.themoviedb.org/3/${data.type}/${data.id}`)
    },
  )
