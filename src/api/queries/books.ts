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

  return async (body: BookRequest) => {
      const data = await postApi<BookRequest>('notebooks', body);
      queryClient.invalidateQueries({
        queryKey: [BOOKS_KEY],
      });
      console.log(data)
      return await data.json();
    };

};


export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  const putApi = useQueryFn('PUT');
  
  return async (book: Omit<Book,'pages'>) => {
    const data = await putApi<BookRequest>(`notebooks/${book.id}`, book);
    queryClient.invalidateQueries({
      queryKey: [
        book.id,
        BOOKS_KEY
      ],
    });
    return await data.json();
  }
};

export const useRenameBook = (id: string) => {
  const updateBook = useUpdateBook();

  return async (name: string) => {
    const book = await updateBook({ id, name });
    return book;
  }
}