import { useQuery } from '@tanstack/react-query'
import useQueryFn from './useQueryFn';

const useGetQuery = <T>(queryKey: string[], url: string) => {
const makeQueryFn = useQueryFn({ method: 'GET' });
return useQuery<T>({ queryKey, queryFn: async () => makeQueryFn(url) });
};

export default useGetQuery;