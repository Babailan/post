import Router from "next/router";
import { useContext, useEffect } from "react";
import { SignIn } from "../../components";
import User from "../../context/user";

function Page() {
    const userProvider = useContext(User);
    useEffect(() => {
        if (userProvider.user) {
            Router.push("/");
        };
    });
    return <SignIn />;
}


export default Page;