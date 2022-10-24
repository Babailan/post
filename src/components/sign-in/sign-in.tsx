import axios from "axios";
import { signInWithCustomToken, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import auth from "../../firebase/auth";
import { Input } from "../input";
import { Leftcol } from "../leftcol";
// the css for this is also sign -up page so import the sign-up page on '../sign-up/style.module.scss';
import style from '../sign-up/style.module.scss';



function SignIn() {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const ref = useRef<HTMLDivElement>();

    const [errors, setErrors] = useState({
        username: "",
        password: "",
        email: ""
    });
    useEffect(() => {
        window.scrollTo(0, ref.current.offsetTop);
    }, [])

    const signIn = async () => {
        const response = await axios.post("/api/sign-in", { email, password });
        const { data } = response;
        await signInWithEmailAndPassword(auth(), email, password);
    }
    return (
        <div className={style.container}>
            <Leftcol />
            <div className={style.rightcol}>
                <div className={style.content} ref={ref}>
                    <div>
                        <h1>Sign in</h1>
                        <small>Buy what ice cream you want sign in first.

                        </small>
                        <br />
                        <Link href={"/"} >
                            <a>
                                <small style={{ color: "#000" }}>
                                    Explore more.
                                </small>
                            </a>
                        </Link>
                    </div>
                    <br />
                    <h1></h1>
                    <Input name={"email"} placeholder={"Email address"} type={"text"} setState={setEmail}></Input>
                    <small style={{ color: "#ff0000" }}>{errors.username}</small>
                    <br />
                    <Input name="password" placeholder="Password" type={"password"} setState={setPassword}></Input>
                    <small style={{ color: "#ff0000" }}>{errors.password}</small>
                    <br />
                    <div className={style.submit} onClick={signIn} >Log in</div>
                    <br />
                    <hr />
                    <br />
                    <small style={{ "textAlign": "center" }}>
                        Don't have account yet?{" "}
                        <Link href={"/sign-up"}>
                            <a href="#">Create account.</a>
                        </Link>
                    </small>
                    <br />
                </div>
            </div>
        </div>
    )
};


export { SignIn };