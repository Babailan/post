import { Dispatch } from "react";

function validator(message: string, setError: Dispatch<{
    username: string;
    password: string;
    email: string;
}>) {

    if (message.includes("email-already-in-use")) {
        setError({
            username: '',
            password: '',
            email: "Please put a valid email address"
        })
    }
}

export default validator;