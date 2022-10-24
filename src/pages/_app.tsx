import Navbar from "../components/navbar/navbar";
import "../css/global.scss";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/auth";
import { User } from "firebase/auth";
import Theme from "../context/user";
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState<User | null>();
    const router = useRouter();
    useEffect(() => {
        auth().onAuthStateChanged((v) => {
            setUser(v);
        });
    }, []);

    return (
        <Theme.Provider value={{ user: user }}>
            {(router.pathname == "/sign-up" || router.pathname == "/sign-in") ? null : <Navbar />}
            <Component {...pageProps} />
        </Theme.Provider>
    )
}


export default MyApp;