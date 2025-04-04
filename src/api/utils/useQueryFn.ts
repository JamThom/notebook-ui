import getBaseUrl from '@/utils/getBaseUrl/getBaseUrl';
import routes from '@/config/routes';
import useToast from '@/ui-hooks/useToast/useToast';
import { useNavigate } from 'react-router';

type UseQueryFnConfig = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    successMessage?: string;
    errorMessage?: string;
}

const useQueryFn = ({
    method,
    successMessage,
    errorMessage,
}: UseQueryFnConfig) => {
    const navigate = useNavigate();
    const { showSuccessToast, showErrorToast } = useToast();
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
            if (response.ok) {
                if (successMessage) {
                    showSuccessToast(successMessage);
                }
            } else {
                if (method !== 'GET' || errorMessage) {
                    console.log(response);
                    const errorData = await response.json();
                    showErrorToast(errorMessage ?? errorData?.message ?? response.statusText);
                }
            }
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