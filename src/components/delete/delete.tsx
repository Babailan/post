import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import User from "../../context/user";
import style from "./style.module.scss";

function Delete() {
  const { user } = useContext(User);
  const router = useRouter();
  useEffect(()=> {
    if(!user) {
      router.push('/');
    }
  },[])
  const proceedDelete = async () => {
    try {
      const token = await user.getIdToken();
      await axios.post("/api/deleteaccount",{token});
      await router.push("/");
      router.reload();
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
