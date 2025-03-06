import { useQuery } from '@tanstack/react-query'
import getBaseUrl from './getBaseUrl';

const makeQueryFn = (url: string) => async () => {
  try {
    const response = await fetch(`${getBaseUrl()}/api/${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const useGetQuery = <T>(queryKey: string[], url: string) => {
return useQuery<T>({ queryKey, queryFn: makeQueryFn(url) });
};

export default useGetQuery;