import getBaseUrl from './getBaseUrl';
import routes from '../../config/routes';
import { useNavigate } from 'react-router';

const useQueryFn = (method: 'GET' | 'POST' | 'PUT' | 'DELETE') => {
    const navigate = useNavigate();
    return async <T>(url: string, body?: T) => {
        try {
            const response = await fetch(`${getBaseUrl()}/api/${url}`, {
                method,
                credentials: 'include',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
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
};

export default useQueryFn;