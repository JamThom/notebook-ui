import { LoginModel } from "@/types/api/api";

const login = async ({ email, password }: LoginModel) => {
    try {
        await fetch('https://api.example.com/login', {
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