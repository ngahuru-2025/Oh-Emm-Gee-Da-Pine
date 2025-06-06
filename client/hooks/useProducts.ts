import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getProducts, getProductById } from '../apis/products.ts'

export function useProducts() {
  const query = useQuery({ queryKey: ['products'], queryFn: getProducts })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useProductId(id: number) {
  const query = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  })
  return {
    ...query,
  }
}

export function useFruitsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
