import { BookResponse, BooksResponse, CreateBookRequest, UpdateBookRequest } from "@/types/api";
import useGetQuery from "../utils/useGetQuery";
import { useQueryClient } from "@tanstack/react-query";
import useQueryFn from "../utils/useQueryFn";
import { useParams } from "react-router";

export const BOOKS_KEY = 'books';

export const useGetBooks = () => {
  return useGetQuery<BooksResponse>([BOOKS_KEY], 'books').data;
};

export const useGetBook = ({ id }: { id: string }) => {
  return useGetQuery<BookResponse>([id], `books/${id}`).data;
};

export const useGetCurrentBook = () => {
  const bookId = useParams<{ bookId: string }>().bookId as string;
  return useGetBook({ id: bookId });
};

export const useDeleteCurrentBook = () => {
  const bookId = useParams<{ bookId: string }>().bookId as string;
  const deleteBook = useDeleteBook();
  return async () => {
    await deleteBook(bookId);
  }
}

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  const postApi = useQueryFn({
    method: 'POST',
    successMessage: 'Book created successfully',
  });
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
  const putApi = useQueryFn({
    method: 'PUT',
    successMessage: 'Book updated successfully',
  });
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

export const useUpdateCurrentBook = () => {
  const bookId = useParams<{ bookId: string }>().bookId as string;
  return useUpdateBook(bookId);
}

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const deleteBook = useQueryFn({
    method: 'DELETE',
    successMessage: 'Book deleted successfully',
  });

  return async (bookId: string) => {
    await deleteBook(`books/${bookId}`);
    queryClient.invalidateQueries({
      queryKey: [BOOKS_KEY],
    });
  };
}