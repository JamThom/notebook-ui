import { useQuery } from '@tanstack/react-query'
import getBaseUrl from './getBaseUrl';
import routes from '../../config/routes';
import { useNavigate } from 'react-router';

const useQueryFn = () => {
  const navigate = useNavigate();
  return (url: string) => async () => {
  try {
    const response = await fetch(`${getBaseUrl()}/${url}`, {
      method: 'GET',
      credentials: 'include',
    });
    if (response.status === 401) {
      navigate(routes.login);
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
}

const useGetQuery = <T>(queryKey: string[], url: string) => {
const makeQueryFn = useQueryFn();
return useQuery<T>({ queryKey, queryFn: makeQueryFn(url) });
};

export default useGetQuery;