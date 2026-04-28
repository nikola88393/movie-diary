import type { TmdbDiscoverMovieResult, TmdbDiscoverTvResult } from '#/services/tmdb-api/tmdb.types'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useNavigate } from '@tanstack/react-router'

export default function MovieCard({
  item
}: {
  item: TmdbDiscoverMovieResult | TmdbDiscoverTvResult
}) {
  const navigate = useNavigate()

  const handleClick = () => {
    // Navigate to the movie details page
    // You can replace 'movie' with 'tv' if it's a TV show
    navigate({ to: `/movie/movie/${item.id}` })
  }
  const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`

  return (
    <Card className='pt-0 overflow-hidden' onClick={() => handleClick()}>
      <img src={posterUrl} alt={item.title || item.original_name} />
      <CardHeader>
        <CardTitle>{item.title || item.original_name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
    </Card>
  )
}
