import { LoginRequest } from "@/types/api";
import getBaseUrl from "@/utils/getBaseUrl/getBaseUrl";

export const login = async ({ email, password }: LoginRequest) => {
  return await fetch(`${getBaseUrl()}/api/Account/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};