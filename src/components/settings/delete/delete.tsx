import Link from "next/link";
import { useContext, useState } from "react";
import style from "./style.module.scss";

function Delete() {
  const [show, setShow] = useState(false);
  return (
    <div className={style.container}>
      <Link href={"/settings/delete"} className={style.deleteAccount} onClick={() => setShow(true)}>
        Delete account
      </Link>
    </div>
  );
}

export default Delete;
