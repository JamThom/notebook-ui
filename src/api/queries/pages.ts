import { CreatePageRequest, Page } from "@/types/api/api";
import useGetQuery from "../utils/useGetQuery";
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
  const queryClient = useQueryClient();
  const deletePage = useQueryFn('DELETE');
  return async (page: Page) => {
    const book = queryClient.getQueryState([page.bookId]);
    await deletePage(`pages/${page.id}`);
    console.log({ book, page, bookId: page.bookId });
    queryClient.invalidateQueries({
      queryKey: [page.bookId]
    });
  };
};

export const useCreatePage = () => {
  const queryClient = useQueryClient();
  const postApi = useQueryFn('POST');

  return async (body: CreatePageRequest) => {
    await postApi<CreatePageRequest>('pages', body);
    const page = queryClient.getQueryState([body.bookId]);
    console.log(page, body.bookId);
    queryClient.invalidateQueries({
      queryKey: [body.bookId]
    });
  };
};