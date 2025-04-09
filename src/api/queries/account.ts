import { AccountResponse, UpdateAccountRequest } from "@/types/api";
import useGetQuery from "../utils/useGetQuery";
import { useQueryClient } from "@tanstack/react-query";
import useQueryFn from "../utils/useQueryFn";

const ACCOUNT_KEY = 'account';

export const useGetAccount = () => {
  return useGetQuery<AccountResponse>([ACCOUNT_KEY], 'account').data;
};


export const useUpdateAccount = () => {
  const queryClient = useQueryClient();
  const putApi = useQueryFn({
    method: 'PUT',
    successMessage: 'Account updated successfully',
  });
  return async (account: UpdateAccountRequest) => {
    console.log('account', account);
    const data = await putApi<UpdateAccountRequest>('account', account);
    queryClient.invalidateQueries({
      queryKey: [
        ACCOUNT_KEY
      ],
    });
    return await data.json();
  }
};