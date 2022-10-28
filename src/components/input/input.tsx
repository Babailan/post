import { ChangeEvent, CSSProperties } from "react";
import style from './style.module.scss'


function Input({ name, placeholder, type, setState, hasError, onChange }: { name: string, placeholder: string, type: string, setState: Function, hasError?: string, onChange?: Function }) {
    const stateChange = (e: ChangeEvent, setter: Function) => {
        const element = e.target as HTMLInputElement;
        setter(element.value);
    };
    const textChange = (e: ChangeEvent) => {
        stateChange(e, setState);
        if (typeof onChange == "function") {
            onChange();
        }
    }
    return (
        <>
            <input name={name} placeholder={placeholder} className={`${style.input} ${hasError ? style.error : ""}`} type={type} onChange={textChange}></input>
            <small style={{ color: "#ff0000" }}>{hasError}</small>
        </>
    )
}


export { Input };