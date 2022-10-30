import axios from "axios";
import { OAuthCredential, reauthenticateWithCredential } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../components";
import { Settings } from "../components/settings";
import User from "../context/user";
import auth from "../firebase/auth";
import reload from "../libs/reload";

export default function Page() {
    const { user } = useContext(User);
    const [info, setInfo] = useState<null | { displayName: string, email: string }>(null);
    useEffect(() => {
        if (user) {
            user.getIdToken(true).then(async (v) => {
                const y = await axios.post("/api/getinfo", { token: v });
                setInfo(y.data);
                return;
            })
        }
    }, [user]);
    return info ? <Settings info={info} /> : <Loader />
}
