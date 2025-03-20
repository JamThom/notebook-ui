import { RegisterRequest } from "@/types/api";
import getBaseUrl from "@/utils/getBaseUrl/getBaseUrl";

export const register = async (formData: RegisterRequest) => {
    try {
        await fetch(`${getBaseUrl()}/api/Account/register`, {
            method: 'POST',
            body: JSON.stringify(formData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error(err);
    }
};