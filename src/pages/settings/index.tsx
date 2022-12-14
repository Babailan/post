import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Settings } from "../../components";
import User from "../../context/user";

export default function Page() {
    const { user } = useContext(User);
    const [info, setInfo] = useState<null | boolean | { displayName: string, email: string }>(null);
    useEffect(() => {
        console.log(info);
    }, [user]);
    return <Settings info={user} />;
}
