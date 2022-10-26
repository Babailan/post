// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import style from './style.module.scss';
import { Input } from "../input";
import { Leftcol } from "../leftcol";
import Link from "next/link";
import auth from "../../firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function SignUp() {
    const [displayName, setDisplayName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState({
        displayName: "",
        password: "",
        email: ""
    });
    const ref = useRef<HTMLDivElement>();

    useEffect(() => {
        window.scrollTo(0, ref.current.offsetTop);
    }, []);

    async function createAcoount() {
        try {
            const f = await createUserWithEmailAndPassword(auth(), email, password);
        }
        catch (err) {
            validator(err.code, setErrors)
        }
    };

    return (
        <>
            {/* extra background */}
            <div className={style.container} >
                <Leftcol />
                <div className={style.rightcol}>
                    <div className={style.content} ref={ref}>
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
                        <Input name={"username"} placeholder={"Username"} type={"text"} setState={setDisplayName}></Input>
                        <br />
                        <Input name="password" placeholder="Password" type={"password"} setState={setPassword}></Input>
                        <small style={{ color: "#ff0000" }}>{errors.password}</small>
                        <br />
                        <Input name="email" placeholder="Email" type={"text"} setState={setEmail}></Input>
                        <small style={{ color: "#ff0000" }}>{errors.email}</small>
                        <br />
                        <div className={style.submit} onClick={createAcoount}>Sign up</div>
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