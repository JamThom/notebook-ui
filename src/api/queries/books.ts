import { BookResponse, BooksResponse, CreateBookRequest, UpdateBookRequest } from "@/types/api";
import useGetQuery from "../utils/useGetQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useQueryFn from "../utils/useQueryFn";

export const BOOKS_KEY = 'books';

export const useGetBooks = () => {
  return useGetQuery<BooksResponse>([BOOKS_KEY], 'books').data?.items;
};

export const useGetBook = ({ id }: { id: string }) => {
  return useGetQuery<BookResponse>([id], `books/${id}`).data?.item;
};

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  const postApi = useQueryFn('POST');

  return async (body: CreateBookRequest) => {
      const data = await postApi<CreateBookRequest>('books', body);
      queryClient.invalidateQueries({
        queryKey: [BOOKS_KEY],
      });
      return data;
    };

};


export const useUpdateBook = (id: string) => {
  const queryClient = useQueryClient();
  const putApi = useQueryFn('PUT');
  
  return async (book: Omit<UpdateBookRequest,'pages'>) => {
    const data = await putApi<UpdateBookRequest>(`books/${id}`, book);
    queryClient.invalidateQueries({
      queryKey: [
        id,
        BOOKS_KEY
      ],
    });
    return await data.json();
  }
};

export const useRenameBook = (id: string) => {
  const updateBook = useUpdateBook(id);

  return async (name: string) => {
    const book = await updateBook({ name });
    return book;
  }
}