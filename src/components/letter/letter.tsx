import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import User from "../../context/user";
import auth from "../../firebase/auth";
import style from "./style.module.scss";

// for dropdown of profile;

export function Letter({ children }) {
    const { user } = useContext(User);
    const [dropDown, setDropdown] = useState(false);
    const HTMLDropDown = useRef<HTMLDivElement>();
    const HTMLCircle = useRef();

    const addEventListenerClick = (e: MouseEvent) => {
        if (e.target !== HTMLDropDown.current && e.target !== HTMLCircle.current) {
            setDropdown(false);
        }
    };

    useEffect(() => {
        // check what did you click;
        window.addEventListener("click", addEventListenerClick);
        return () => {
            window.removeEventListener("click", addEventListenerClick);
        };
    }, []);

    return (
        <div
            className={style.container}


        >
            {children}
            <span className={style.pointer} ref={HTMLCircle} onClick={() => setDropdown((p) => !p)}></span>
            {dropDown && (
                <div className={style.dropDown} ref={HTMLDropDown}>
                    <small className={style.displayName}>{user.displayName}</small>
                    <hr></hr>
                    <div className={style.settings}>
                        <small>Settings</small>
                    </div>
                    <div onClick={() => auth().signOut()}>
                        <small>Log out</small>
                    </div>
                </div>
            )}
        </div>
    );
}
