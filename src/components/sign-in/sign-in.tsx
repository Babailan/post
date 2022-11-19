import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { FormEvent, useState } from "react";
import app from "../../firebase/client/app";
import { Input } from "../input";
import { Leftcol } from "../leftcol";
// the css for this is also sign -up page so import the sign-up page on '../sign-up/style.module.scss';
import style from '../sign-up/style.module.scss';
import validator from '../../libs/codeError';

export function SignIn() {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const defaultErrors = {
        email: "",
        password: ""
    }

    const [errors, setErrors] = useState(defaultErrors);


    const signIn = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) {
            setErrors(p => {
                return { ...p, email: "Please provide Email" };
            })
        }
        if (!password) {
            setErrors(p => {
                return { ...p, password: "Please provide password" };
            })
        }
        if (!email || !password) {
            return;
        }
        try {
            const auth = getAuth(app)
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setErrors(validator(err.code));
        }
    }

    return (
        <div className={style.container}>
            <Leftcol />
            <div className={style.rightcol}>
                <div className={style.content}>
                    <div>
                        <h1>Sign in</h1>
                        <small>Buy what ice cream you want sign in first.

                        </small>
                        <br />
                        <Link href={"/"} >
                            <small>
                                Explore more.
                            </small>
                        </Link>
                    </div>
                    <br />
                    <form onSubmit={signIn}>
                        <Input onChange={() => setErrors(defaultErrors)} name={"email"} placeholder={"Email address"} type={"text"} hasError={errors.email} setState={setEmail}></Input>
                        <br />
                        <br />
                        <Input onChange={() => setErrors(defaultErrors)} name="password" placeholder="Password" type={"password"} hasError={errors.password} setState={setPassword}></Input>
                        <br />
                        <br />
                        <button className={style.submit} type={'submit'}>Log in</button>
                    </form>
                    <br />
                    <hr />
                    <br />
                    <small style={{ "textAlign": "center" }}>
                        Don't have account yet?{" "}
                        <Link href={"/sign-up"}>
                            Create account.
                        </Link>
                    </small>
                    <br />
                </div>
            </div>
        </div>
    )
};




