// import Image from "next/image";
import { FormEvent, useState } from "react";
import style from './style.module.scss';
import { Input } from "../input";
import { Leftcol } from "../leftcol";
import Link from "next/link";
import auth from "../../firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import code from "../../libs/codeError";
import axios from "axios";

export function SignUp() {
    const [displayName, setDisplayName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const defaultErrors = {
        displayName: "",
        email: "",
        password: ""
    }

    const [errors, setErrors] = useState(defaultErrors);


    async function createAccount(e: FormEvent) {
        e.preventDefault();
        if (!displayName) {
            setErrors(p => {
                return { ...p, displayName: "Please provide display name." };
            })
        }
        if (!email) {
            setErrors(p => {
                return { ...p, email: "Please provide email" };
            })
        }
        if (!password) {
            setErrors(p => {
                return { ...p, password: "Please provide password" };
            })
        }
        if (!displayName || !email || !password) {
            return;
        }
        try {
            const x = await axios.post('/api/createuser', { email, password, displayName });
            await signInWithEmailAndPassword(auth(), email, password);
        } catch (err) {
            const data = err.response.data;
            setErrors(code(data.code));
        }
    };


    return (
        <>
            {/* extra background */}
            <div className={style.container} >
                <Leftcol />
                <div className={style.rightcol}>
                    <div className={style.content}>
                        <div>
                            <h1>Sign Up</h1>
                            <small>It&apos;s Quick And Easy.</small>
                            <br />
                            <small>
                                <Link href={"/"} style={{ color: "#000" }} >
                                    Explore more.
                                </Link>
                            </small>
                        </div>
                        <br />
                        <form onSubmit={createAccount}>
                            <Input name={"username"} hasError={errors.displayName} placeholder={"Display Name"} type={"text"} setState={setDisplayName}></Input>
                            <br />
                            <br />
                            <Input onChange={() => setErrors(defaultErrors)} hasError={errors.password} name="password" placeholder="Password" type={"password"} setState={setPassword}></Input>
                            <br />
                            <br />
                            <Input onChange={() => setErrors(defaultErrors)} hasError={errors.email} name="email" placeholder="Email" type={"text"} setState={setEmail}></Input>
                            <br />
                            <br />
                            <button className={style.submit} onSubmit={createAccount}>Sign up</button>
                        </form>
                        <br />
                        <hr />
                        <br />
                        <small style={{ "textAlign": "center" }}>
                            Already have account?{" "}
                            <Link href={"/sign-in"} >
                                Login in
                            </Link>
                        </small>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}


