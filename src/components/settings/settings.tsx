import Link from "next/link";
import { useState } from "react";
import { Loader } from "../loader";
import RowSettings from "./row/row";
import style from "./style.module.scss";

export function Settings({ info }) {
    const [settings, setSettings] = useState({
        profilepic: false,
        displayName: false,
        email: false,
        password: false
    });

    return (<>
        {info ?
            <div className={style.container}>
                <h3>General account settings</h3>
                <br />
                <hr />
                <br />
                <table className={style.table}>
                    <tbody>
                        {/* <RowSettings title={"Profile picture"} changeClick={() => { }} ></RowSettings> */}
                        <RowSettings title={"Display name"} changeClick={() => { }} >{info.displayName}</RowSettings>
                        <RowSettings title={"Email"} changeClick={() => { }} >{info.email}</RowSettings>
                        <RowSettings title={"Password"} changeClick={() => { }}>********</RowSettings>
                    </tbody>
                </table>
                <button className={style.deleteAccount}>Delete account</button>
                <div>
                    <small className={style.goBack}>
                        <Link href={"/"}>Go back</Link>
                    </small>
                </div>
            </div>
            :
            <div className={style.main}>
                <Loader />
            </div>
        }
    </>
    );
};
