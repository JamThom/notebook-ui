import { Book, BookRequest } from "../../types/api/api";
import useGetQuery from "../utils/useGetQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useQueryFn from "../utils/useQueryFn";

export const BOOKS_KEY = 'books';

export const useGetBooks = () => {
  return useGetQuery<Book[]>([BOOKS_KEY], 'notebooks');
};

export const useGetBook = ({ id }: { id: string }) => {
  return useGetQuery<Book>([id], `notebooks/${id}`);
};

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  const postApi = useQueryFn('POST');

  const mutation = useMutation({
    mutationFn: async (body: BookRequest) => {
      await postApi<BookRequest>('notebooks', body);
    },
    onSuccess: (a: any) => {
      console.log(a);
      queryClient.invalidateQueries({
        queryKey: [BOOKS_KEY],
      });
    },
  });

  return mutation;
};