import Link from "next/link";
import { useState } from "react";
import { Loader } from "../loader";
import Delete from "./delete/delete";
import Input from "./input/input";
import style from "./style.module.scss";

export function Settings({ info }) {
  const [newEmail, setNewEmail] = useState("");
  const [emailPassword, setEmailPassword] = useState("");

  const [displayPassword, setDisplayPassword] = useState("");
  const [newDisplayName, setNewDisplayName] = useState("");

  return (
    <>
      {info ? (
        <div>
          <h2 className={style.header}>General Account Settings</h2>
          <hr className={style.line} />
          <div className={style.settingsContainer}>
            <div className={style.info}>
              <div>
                <p>Display Name</p>
                <p>{info.displayName}</p>
              </div>
              <span className="material-icons">chevron_right</span>

            </div>
            <div className={style.info}>
              <div>
                <p>Email</p>
                <p>{info.email}</p>
              </div>
              <span className="material-icons">chevron_right</span>
            </div>
          </div>
          <Delete/>
        </div>
      ) : null}
    </>
  );
}
