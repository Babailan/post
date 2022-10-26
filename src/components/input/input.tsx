import { ChangeEvent, CSSProperties } from "react";


const style: CSSProperties = {
    color: "#ff0000 !important",
    border: "2px solid #ff0000"
}

function Input({ name, placeholder, type, setState, hasError, onChange }: { name: string, placeholder: string, type: string, setState: Function, hasError: string, onChange?: Function }) {
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
            <input name={name} placeholder={placeholder} style={hasError ? style : null} type={type} onChange={textChange}></input>
            <small style={{ color: "#ff0000" }}>{hasError}</small>
        </>
    )
}


export { Input };