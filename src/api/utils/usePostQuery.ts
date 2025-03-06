import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePostBook = (queryKey: string[], mutationFn: () => Promise<any>) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: queryKey,
            });
        },
    });
};

export default usePostBook;