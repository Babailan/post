import Navbar from "../components/navbar/navbar";
import "../css/global.scss";
import { isSignInWithEmailLink, signOut } from 'firebase/auth'
import { useEffect } from "react";
import auth from "../firebase/auth";
function MyApp({ Component, pageProps }) {

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}


export default MyApp