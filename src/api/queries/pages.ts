import { CreatePageRequest, Page } from "@/types/api/api";
import useGetQuery from "../utils/useGetQuery";
import { BOOKS_KEY } from "./books";
import useQueryFn from "../utils/useQueryFn";
import { useQueryClient } from "@tanstack/react-query";

const PAGES_KEY = 'pages';

export const useGetPages = () => {
  return useGetQuery<Page[]>([PAGES_KEY], 'page');
};

export const useGetPage = ({ id }: { id: string }) => {
  return useGetQuery<Page>([PAGES_KEY, id], `pages/${id}`);
};

export const useDeletePage = () => {
  const deletePage = useQueryFn('DELETE');
  return async (id: string) => deletePage(`pages/${id}`);
};

export const useCreatePage = () => {
  const queryClient = useQueryClient();
  const postApi = useQueryFn('POST');

  return async (body: CreatePageRequest) => {
    await postApi<CreatePageRequest>('pages', body);
      console.log(PAGES_KEY, BOOKS_KEY, body.bookId, queryClient.getQueryCache());
      queryClient.invalidateQueries({
        queryKey: [PAGES_KEY, BOOKS_KEY, body.bookId]
      });
  };
};