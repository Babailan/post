import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import BackgroundImage from '../../images/simpleb.svg'
import style from './style.module.scss';
function SignUp() {
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const stateChange = (e: ChangeEvent, setter: Dispatch<SetStateAction<string>>) => {
        const element = e.target as HTMLInputElement;
        setter(element.value);
    };

    return (<div className={style.container} >
        <div className={style.backgroundImage}>
            <Image src={BackgroundImage} layout={"fill"} objectFit={"cover"} />
        </div>
        <div className={style.content}>
            <input placeholder="name" onChange={(e) => stateChange(e, setName)}></input>
            <input placeholder="password" onChange={(e) => stateChange(e, setPassword)}></input>
            <div className={style.submit}>submit</div>
        </div>
    </div>)
}


export default SignUp;