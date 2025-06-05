import { useQuery } from '@tanstack/react-query'
import { getUsers, getUserId } from '../apis/products'

export function useUsers() {
  const query = useQuery({ queryKey: ['users'], queryFn: getUsers })
  return {
    ...query,
  }
}

export function useUserId(id: number) {
  const query = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserId(id),
  })
  return {
    ...query,
  }
}
