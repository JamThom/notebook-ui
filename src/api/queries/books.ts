import { Book } from "@/types/api/api";
import useGetQuery from "../utils/useGetQuery";

const BOOKS_KEY = 'books';

export const useGetBooks = () => {
  return useGetQuery<Book[]>([BOOKS_KEY], 'notebooks');
};

export const useGetBook = ({ id }: { id: string }) => {
  return useGetQuery<Book>([BOOKS_KEY, id], `notebooks/${id}`);
};