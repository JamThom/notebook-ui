import { LoginModel } from "@/types/api/api";
import getBaseUrl from "./utils/getBaseUrl";

const login = async ({ email, password }: LoginModel) => {
  try {
    await fetch(`${getBaseUrl()}/Account/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export default login;