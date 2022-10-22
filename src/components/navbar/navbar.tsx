import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MiddleNav from './middle';
import style from './style.module.scss';
function Navbar() {
    // const router = Router.
    const router = useRouter();
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
                <span className={style.cartContainer}>
                    <span className={`material-icons ${style.shopping_cart}`}>shopping_cart</span> Cart · 0
                </span>
            </div>
        </div>
    )
}

export default Navbar;