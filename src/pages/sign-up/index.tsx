import Router from "next/router";
import { useContext, useEffect } from "react";
import { SignUp } from "../../components";
import User from "../../context/user";
import auth from ".././../firebase/auth";

function Page() {
    const userProvider = useContext(User)
    useEffect(() => {
        if (userProvider.user) {
            Router.push("/");
        };
    });
    return <SignUp />
}

export default Page;