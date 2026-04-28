import MovieCard from '#/components/MovieCard'
import { getMovies, getShows } from '#/services/tmdb-api/tmdb.functions'
import { useInfiniteQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/category/$type/$categoryId')({
  component: RouteComponent,
  loader: async ({ params, context }) => {
    const { type, categoryId } = params
    console.log(params)

    return context.queryClient.ensureInfiniteQueryData({
      queryKey: ['movies', type, categoryId, 1],
      initialPageParam: 1,
      queryFn: async ({ pageParam}) => {
        if (type === 'movie') {
          return await getMovies({ data : { page: pageParam, sort_by: "popularity.desc" } })
        } else {
          return await getShows({ data: { page: pageParam, sort_by: "popularity.desc" } })
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1
        }
        return undefined
      },
    })
  },
})

function RouteComponent() {
  const { pages, pageParams } = Route.useLoaderData()
  const { type, categoryId } = Route.useParams()
  const categoryRef = useRef<HTMLDivElement>(null)

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({
    queryKey: ['movies', type, categoryId],
    queryFn: async ({ pageParam = 1 }) => {
      if (type === 'movie') {
        return await getMovies({ data : { page: pageParam, sort_by: "popularity.desc" } })
      } else {
        return await getShows({ data: { page: pageParam, sort_by: "popularity.desc" } })
      }
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1
      }
      return undefined
    },
    
    
    initialPageParam: pageParams[0] + 1,
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    if(categoryRef.current) {
      observer.observe(categoryRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])
  console.log(pages, pageParams)
  return (
    <div ref={categoryRef} className="grid grid-cols-4 gap-4 w-6xl mr-auto ml-auto mt-32">
      {data?.pages.flatMap((page) => page.results).map((item) => (
        <MovieCard
          key={item.id}
          title={item.original_title || item.original_name}
          posterUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        />
      ))}
      {/* {hasNextPage && (
        <div ref={categoryRef} className="mt-8 mr-auto ml-auto text-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-3 rounded bg-blue-600 text-white"
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )} */}
      {hasNextPage && (<span ref={categoryRef} />)}
    </div>
  )
}
