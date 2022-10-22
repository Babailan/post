// desktop
import Link from "next/link";
import { NextRouter } from "next/router";
import style from "../style.module.scss"

function MiddleNav({ router }: { router: NextRouter }) {
    return (
        <div className={style.middle}>
            <Link href={"/"}>
                <div style={{ "borderBottom": router.asPath === "/" ? "2px solid #ffffff" : "none" }}>Explore</div>
            </Link>
            <Link href={"/variety"}>
                <div style={{ "borderBottom": router.asPath === "/variety" ? "2px solid #ffffff" : "none" }}>Variety</div>
            </Link>
        </div >
    )
}

export default MiddleNav;