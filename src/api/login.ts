import { LoginModel } from "../types/api/api";
import getBaseUrl from "./utils/getBaseUrl";

const login = async ({ email, password }: LoginModel) => {
  return await fetch(`${getBaseUrl()}/Account/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    //   'Origin': 'http://localhost:3000',
    //   'Referer': 'http://localhost:3000/',
    //   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    //   'sec-ch-ua-platform': '"macOS"',
    //   'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
    //   'sec-ch-ua-mobile': '?0'
    // },
    credentials: 'include'
  });
};

export default login;