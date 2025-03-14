import { AccountResponse } from "../../types/api";
import useGetQuery from "../utils/useGetQuery";

const ACCOUNT_KEY = 'account';

export const useGetAccount = () => {
  return useGetQuery<AccountResponse>([ACCOUNT_KEY], 'account').data?.item;
};