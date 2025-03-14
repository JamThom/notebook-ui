import { Account } from "@/types/api/api";
import useGetQuery from "../utils/useGetQuery";

const ACCOUNT_KEY = 'account';

export const useGetAccount = () => {
  return useGetQuery<Account>([ACCOUNT_KEY], 'account');
};