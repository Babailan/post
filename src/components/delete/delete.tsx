import axios from "axios";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import User from "../../context/user";
import app from "../../firebase/client/app";
import style from "./style.module.scss";

function Delete() {
  const { user } = useContext(User);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);
  const proceedDelete = async () => {
    try {
      const auth = getAuth(app);
      const token = await auth.currentUser.getIdToken(true);
      const y = await axios.post("/api/deleteaccount", { token });
      console.log(y);
      await router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={style.container}>
      <p>Are you sure you want to delete this account?</p>
      <p>
        once you delete your account you can't take it back <br />
        all your information will be deleted.
      </p>
      <div>
        <span onClick={() => proceedDelete()} className={style.proceed}>
          Proceed
        </span>
        <span onClick={() => router.push("/settings")} className={style.cancel}>
          Cancel
        </span>
      </div>
    </div>
  );
}

export { Delete };
