import axios from "axios";
import { useContext, useState } from "react";
import User from "../../context/user";
import style from "./style.module.scss";
import Input from './input/index';

function ChangeName() {
  const [displayname, setdisplayname] = useState("");
  const [password, setpassword] = useState("");
  const { user } = useContext(User);

  const submit = async () => {
    try {
      const token = await user.getIdToken();
      const req = await axios.post("/api/changedisplayname", {
        displayname,
        password,
        token,
      });
    } catch (err) {}
  };
  return (
    <div className={style.container}>
      <p>Please use appropriate names</p>
      <Input type={"text"} error={""} placeholder={"Display Name"} set={setdisplayname}/>
      <Input type={"password"} error={""} placeholder={"Password"} set={setpassword}/>
      <div className={style.save} onClick={submit}>
        <b>Save changes</b>
      </div>
    </div>
  );
}

export { ChangeName };
