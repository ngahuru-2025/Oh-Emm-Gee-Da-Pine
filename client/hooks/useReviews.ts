import { useQuery } from '@tanstack/react-query'
import { getReviews } from '../apis/products'

export function useUsers() {
  const query = useQuery({ queryKey: ['reviews'], queryFn: getReviews })
  return {
    ...query,
  }
}
