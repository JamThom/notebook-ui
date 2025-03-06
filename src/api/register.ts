import { RegisterModel } from "@/types/api/api";
import getBaseUrl from "./utils/getBaseUrl";

const register = async (formData: RegisterModel) => {
    try {
        await fetch(`${getBaseUrl()}/api/Account/register`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        console.error(err);
    }
};

export default register;