import getBaseUrl from "@/utils/getBaseUrl/getBaseUrl";

export const logOut = async () => {
  await fetch(`${getBaseUrl()}/api/Account/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  window.location.reload();
};