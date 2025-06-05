import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../apis/products'

export function useUsers() {
  const query = useQuery({ queryKey: ['users'], queryFn: getUsers })
  return {
    ...query,
  }
}
