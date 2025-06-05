import { useQuery } from '@tanstack/react-query'
import { getReviews, getReviewId } from '../apis/products'

export function useReviews() {
  const query = useQuery({ queryKey: ['reviews'], queryFn: getReviews })
  return {
    ...query,
  }
}

export function useReviewId(id: number) {
  const query = useQuery({
    queryKey: ['reviews', id],
    queryFn: () => getReviewId(id),
  })
  return {
    ...query,
  }
}
