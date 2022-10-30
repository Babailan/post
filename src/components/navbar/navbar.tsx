import Link from 'next/link';
import { useRouter } from 'next/router';
import auth from '../../firebase/auth';
import MiddleNav from './middle';
import style from './style.module.scss';
import stylesignIn from '../sign-up/style.module.scss';
import { useContext } from 'react';
import userContext from '../../context/user'
import User from '../../context/user';
import { Letter } from '../letter';

export function Navbar() {
    // const router = Router.
    const router = useRouter();
    const { user } = useContext(User)

    const cartOnClick = () => {
        console.log(user);
    }
    return (
        <div className={style.container}>
            <div className={style.icon}>
                <Link href={"/"}>
                    <small>IceCream.Store</small>
                </Link>
            </div>
            <MiddleNav router={router} />
            <div className={style.rightcol}>
                <div className={style.line} style={{ marginRight: "4px" }}></div>
                {user && (
                    <>
                        <span className={style.cartContainer} onClick={cartOnClick}>
                            <span className={`material-icons ${style.shopping_cart}`}>shopping_cart</span> Cart · {0}
                        </span>
                        <Letter>{user.displayName[0]}</Letter>
                    </>
                )
                }
                {!user &&
                    (
                        <Link href={"/sign-in"}>
                            <b style={{ "textDecoration": "underline", "cursor": "pointer" }}>Log in</b>
                        </Link>
                    )
                }
            </div>
        </div >
    )
}

