import Image from 'next/image';
import style from './style.module.scss';
import Image1 from '../../images/d.jpg'
import Image2 from '../../images/a.jpg'
import Image3 from '../../images/c.jpg'
import Image4 from '../../images/b.jpg'

function Leftcol() {
    return (
        <div className={style.leftcol}>
            <div className={style.one}><Image src={Image2} alt={"image1"} className={style.contain} sizes={null} loading={"lazy"} /></div>
            <div className={style.two}><Image src={Image1} alt={"image2"} className={style.contain} sizes={null} loading={"lazy"} /></div>
            <div className={style.three}><Image src={Image3} alt={"image3"} className={style.contain} sizes={null} loading={"lazy"} /></div>
            <div className={style.four}><Image src={Image4} alt={"image4"} className={style.contain} sizes={null} loading={"lazy"} /></div>
        </div>
    )
}
export { Leftcol };