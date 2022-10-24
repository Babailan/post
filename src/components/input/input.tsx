import { ChangeEvent } from "react";

function Input({ name, placeholder, type, setState }) {
    const stateChange = (e: ChangeEvent, setter: Function) => {
        const element = e.target as HTMLInputElement;
        setter(element.value);
    };

    return (<input name={name} placeholder={placeholder} type={type} onChange={(e) => stateChange(e, setState)}></input>)
}


export { Input };