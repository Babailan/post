import "../css/global.scss";
import { useEffect, useState } from "react";
import { connectAuthEmulator, getAuth, User } from "firebase/auth";
import Theme from "../context/user";
import { useRouter } from "next/router";
import { Navbar } from "../components";
import app from "../firebase/client/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";


function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState<User | null>();
    const router = useRouter();

    useEffect(() => {
        // comment this line 20 to 23 if deployment;
        const f = getAuth(app);
        if (process.env.NODE_ENV === "development" && !process.env.emulator) {
            const f = getAuth(app);
            const db = getFirestore(app);
            connectAuthEmulator(f, "http://localhost:9099");
            connectFirestoreEmulator(db, "localhost", 8080);
            process.env.emulator = "1";
        }
        f.onAuthStateChanged((v) => {
            setUser(v);
        });
    }, []);

    return (
        <Theme.Provider value={{ user: user }}>
            {(router.pathname == "/sign-up" || router.pathname == "/settings/delete"||
                router.pathname == "/sign-in" || router.pathname == "/settings") ? null : (
                <Navbar />
            )}
            <Component {...pageProps} />
        </Theme.Provider>
    );
}

export default MyApp;
