import { User } from "firebase/auth";
import { createContext } from "react";

type UserType = {
    user: User | null;
}

const User = createContext<UserType>({ user: null });
export default User; 