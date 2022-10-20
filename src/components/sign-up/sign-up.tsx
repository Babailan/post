import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

function SignUp() {
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const stateChange = (e: ChangeEvent, setter: Dispatch<SetStateAction<string>>) => {
        const element = e.target as HTMLInputElement;
        setter(element.value);
    };

    return (<>
        <div>
            <input placeholder="name" onChange={(e) => stateChange(e, setName)}></input>
            <input placeholder="password" onChange={(e) => stateChange(e, setPassword)}></input>
            <div>submit</div>
        </div>
    </>)
}


export default SignUp;