import { useRouter } from "next/router";
import style from "./style.module.scss";
function Delete() {
  const router = useRouter();
  return (
    <div
      className={style.container}
      onClick={() => router.push("/settings/delete")}
    >
      Delete Account
    </div>
  );
}

export default Delete;
