import { Page } from "@/types/api/api";
import useGetQuery from "../utils/useGetQuery";

const PAGES_KEY = 'pages';

export const useGetPages = () => {
  return useGetQuery<Page[]>([PAGES_KEY], 'page');
};

export const useGetPage = ({ id }: { id: string }) => {
  return useGetQuery<Page>([PAGES_KEY, id], `pages/${id}`);
};