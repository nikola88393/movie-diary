import { queryOptions } from '@tanstack/react-query'
import { getDetails, getMovies, getShows } from '#/services/tmdb-api/tmdb.functions'
import type { TmdbDiscoverMovieQueryParams, TmdbDiscoverTvQueryParams } from '#/services/tmdb-api/tmdb.types'

const STALE_TIME = 1000 * 60 * 15 // 15 minutes

export const getPopularMoviesQuery = () =>
  queryOptions({
    queryKey: ['movies', 'popular'],
    queryFn: async () => {
      return await getMovies({
        data: { page: 1, sort_by: 'popularity.desc' },
      })
    },
    staleTime: STALE_TIME,
  })

export const getPopularShowsQuery = () =>
  queryOptions({
    queryKey: ['shows', 'popular'],
    queryFn: async () => {
      return await getShows({
        data: { page: 1, sort_by: 'popularity.desc' },
      })
    },
    staleTime: STALE_TIME,
  })

export const getTopRatedMoviesQuery = () =>
  queryOptions({
    queryKey: ['movies', 'top_rated'],
    queryFn: async () => {
      return await getMovies({
        data: {
          page: 1,
          sort_by: 'vote_average.desc',
          without_genres: '99,10755',
          'vote_count.gte': 200,
        },
      })
    },
    staleTime: STALE_TIME,
  })

export const getTopRatedShowsQuery = () =>
  queryOptions({
    queryKey: ['shows', 'top_rated'],
    queryFn: async () => {
      return await getShows({
        data: { page: 1, sort_by: 'vote_average.desc', 'vote_count.gte': 200 },
      })
    },
    staleTime: STALE_TIME,
  })

export const getMoviesQuery = (params: TmdbDiscoverMovieQueryParams) => {
  console.log('getMoviesQuery called with params:', params)
  return queryOptions({
    queryKey: ['movies', params],
    queryFn: async () => {
      return await getMovies({ data: params })
    },
    staleTime: STALE_TIME,
  })
}

export const getShowsQuery = (params: TmdbDiscoverTvQueryParams) => {
  console.log('getShowsQuery called with params:', params)
  return queryOptions({
    queryKey: ['shows', params],
    queryFn: async () => {
      return await getShows({ data: params })
    },
    staleTime: STALE_TIME,
  })  
}

export const getDetailsQuery = (id: number, type: 'movie' | 'tv') =>
  queryOptions({
    queryKey: ['details', type, id],
    queryFn: async () => {
      return await getDetails({ data: { id, type } })
    },
    staleTime: STALE_TIME,
  })