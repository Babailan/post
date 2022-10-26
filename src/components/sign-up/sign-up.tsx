// import Image from "next/image";
import { useState } from "react";
import style from './style.module.scss';
import { Input } from "../input";
import { Leftcol } from "../leftcol";
import Link from "next/link";
import auth from "../../firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import code from "../../libs/codeError";
import axios from "axios";

function SignUp() {
    const [displayName, setDisplayName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const defaultErrors = {
        displayName: "",
        email: "",
        password: ""
    }

    const [errors, setErrors] = useState(defaultErrors);


    async function createAccount() {
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
            const f = await createUserWithEmailAndPassword(auth(), email, password);
            // axios
            console.log(f)
        }
        catch (err) {
            code(err.code)
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
                        <Input name={"username"} hasError={errors.displayName} placeholder={"Username"} type={"text"} setState={setDisplayName}></Input>
                        <br />
                        <Input onChange={() => setErrors(defaultErrors)} hasError={errors.password} name="password" placeholder="Password" type={"password"} setState={setPassword}></Input>
                        <br />
                        <Input onChange={() => setErrors(defaultErrors)} hasError={errors.email} name="email" placeholder="Email" type={"text"} setState={setEmail}></Input>
                        <br />
                        <div className={style.submit} onClick={createAccount}>Sign up</div>
                        <br />
                        <hr />
                        <br />
                        <small style={{ "textAlign": "center" }}>
                            Already have account?{" "}
                            <Link href={"/sign-in"}>
                                <a href="#">Login.</a>
                            </Link>
                        </small>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}


export { SignUp };