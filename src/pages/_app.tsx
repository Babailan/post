import Navbar from "../components/navbar/navbar";
import "../css/global.scss";
import { useEffect, useState } from "react";
import auth from "../firebase/auth";
import { connectAuthEmulator, User } from "firebase/auth";
import Theme from "../context/user";
import { useRouter } from "next/router";
import { connectFirestoreEmulator } from "firebase/firestore";
import db from "../firebase/db";



function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState<User | null>();
    const router = useRouter();

    useEffect(() => {
        const f = auth();
        // comment this line 18 if deployment;
        if (process.env.NODE_ENV === "development") {
            // connectAuthEmulator(f, 'http://localhost:9099');
            // connectFirestoreEmulator(db(), 'localhost', 8080);
        }
        f.onAuthStateChanged((v) => {
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