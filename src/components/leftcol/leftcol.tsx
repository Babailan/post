import Image from 'next/image';
import style from '../sign-up/style.module.scss';
import Image1 from '../../images/d.jpg'
import Image2 from '../../images/a.jpg'
import Image3 from '../../images/c.jpg'
import Image4 from '../../images/b.jpg'

function Leftcol() {
    return (
        <div className={style.leftcol}>
            <div className={style.one}><Image src={Image2} alt={"image1"} layout={"fill"} objectFit={"contain"} loading={"lazy"} /></div>
            <div className={style.two}><Image src={Image1} alt={"image2"} layout={"fill"} objectFit={"contain"} loading={"lazy"} /></div>
            <div className={style.three}><Image src={Image3} alt={"image3"} layout={"fill"} objectFit={"contain"} loading={"lazy"} /></div>
            <div className={style.four}><Image src={Image4} alt={"image4"} layout={"fill"} objectFit={"contain"} loading={"lazy"} /></div>
        </div>
    )
}

export { Leftcol };