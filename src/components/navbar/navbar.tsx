import Link from 'next/link';
import { useRouter } from 'next/router';
import auth from '../../firebase/auth';
import MiddleNav from './middle';
import style from './style.module.scss';
import stylesignIn from '../sign-up/style.module.scss';
import { useContext } from 'react';
import userContext from '../../context/user'

function Navbar() {
    // const router = Router.
    const router = useRouter();

    const cartOnClick = () => {
        if (auth().currentUser) {
            // console.log(auth().currentUser)
        } else {
            router.push("/sign-in");
        }
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
                <span className={style.cartContainer} onClick={cartOnClick}>
                    <span className={`material-icons ${style.shopping_cart}`}>shopping_cart</span> Cart · {0}
                </span>
                {useContext(userContext).user && < span onClick={() => auth().signOut()}>log out</span>}
            </div>
        </div >
    )
}

export default Navbar;