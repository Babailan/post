// import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import BackgroundImage from '../../images/simpleb.svg'
import Image1 from '../../images/d.jpg'
import Image2 from '../../images/a.jpg'
import style from './style.module.scss';
import axios from 'axios';
import Image from "next/image";
function SignUp() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")

    const stateChange = (e: ChangeEvent, setter: Dispatch<SetStateAction<string>>) => {
        const element = e.target as HTMLInputElement;
        setter(element.value);
    };


    async function SendData() {
        const f = await axios.post('/api/sign-up', {
            username,
            password,
            email
        });
        console.log(f)
        return f;
    }
    return (
        <>
            {/* extra background */}
            <div className={style.backgroundImage}>
                {/* <Image src={BackgroundImage} layout={"fill"} objectFit={"cover"} /> */}
            </div>
            <div className={style.container} >
                <div className={style.leftcol}>
                    <div className={style.one}><Image src={Image2} layout={"fill"} objectFit={"cover"} /></div>
                    <div className={style.two}><Image src={Image1} layout={"fill"} objectFit={"cover"} loading={"lazy"} /></div>
                </div>
                <div className={style.rightcol}>
                    <div className={style.content}>
                        <div>
                            <h1>Sign Up</h1>
                            <small>It's Quick And Easy</small>
                        </div>
                        <br />
                        <h1></h1>
                        <input placeholder="Username" type={"text"} onChange={(e) => stateChange(e, setUsername)}></input>
                        <input placeholder="Password" type={"password"} onChange={(e) => stateChange(e, setPassword)}></input>
                        <input placeholder="Email" type={"text"} onChange={(e) => stateChange(e, setEmail)}></input>
                        <div className={style.submit} onClick={SendData}>Sign up</div>
                        <br />
                        <hr />
                        <br />
                        <small style={{ "textAlign": "center" }}>
                            Already have account?
                            <a href="#" onClick={SendData}> Login.</a>
                        </small>
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignUp;