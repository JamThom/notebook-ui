import { CreatePageRequest, PageResponse } from "@/types/api";
import useGetQuery from "../utils/useGetQuery";
import useQueryFn from "../utils/useQueryFn";
import { useQueryClient } from "@tanstack/react-query";

const PAGES_KEY = 'pages';

export const useGetPage = ({ id }: { id: string }) => {
  return useGetQuery<PageResponse>([PAGES_KEY, id], `pages/${id}`).data; 
};

export const useDeletePage = () => {
  const queryClient = useQueryClient();
  const deletePage = useQueryFn({
    method: 'DELETE',
    successMessage: 'Page deleted successfully'
  });
  return async (page: PageResponse['item']) => {
    const book = queryClient.getQueryState([page.bookId]);
    await deletePage(`pages/${page.id}`);
    queryClient.invalidateQueries({
      queryKey: [page.bookId]
    });
  };
};

export const useCreatePage = () => {
  const queryClient = useQueryClient();
  const postApi = useQueryFn({
    method: 'POST',
    successMessage: 'Page created successfully'
  });

  return async (body: CreatePageRequest) => {
    await postApi<CreatePageRequest>('pages', body);
    queryClient.invalidateQueries({
      queryKey: [body.bookId]
    });
  };
};