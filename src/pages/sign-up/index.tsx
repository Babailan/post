import Router from "next/router";
import { useContext, useEffect } from "react";
import { SignUp } from "../../components";
import User from "../../context/user";

function Page() {
    const { user } = useContext(User)
    useEffect(() => {
        if (user) {
            Router.push("/");
        };
    }, [user]);

    return <SignUp />;
}

export default Page;