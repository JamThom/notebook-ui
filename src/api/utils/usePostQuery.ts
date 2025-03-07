import { useMutation, useQueryClient } from '@tanstack/react-query'
import useQueryFn from './useQueryFn';

interface Args {
    endpoint: string;
    keys: string[];
}

const usePostQuery = <T>({ endpoint, keys }: Args) => {
    const queryClient = useQueryClient();
    const postApi = useQueryFn('POST');
  
    const mutation = useMutation({
      mutationFn: async (body: T) => {
        await postApi<T>(endpoint, body);
      },
      onSuccess: (a: any) => {
        console.log(keys, queryClient.getQueryCache());
        queryClient.invalidateQueries({
          queryKey: keys,
        });
      },
    });
  
    return mutation.mutate;
  }

export default usePostQuery;