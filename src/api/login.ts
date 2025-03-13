import { LoginModel } from "../types/api/api";
import getBaseUrl from "./utils/getBaseUrl";

const login = async ({ email, password }: LoginModel) => {
  return await fetch(`${getBaseUrl()}/api/Account/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export default login;