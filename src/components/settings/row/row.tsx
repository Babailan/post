import { MouseEventHandler } from 'react';
import style from './style.module.scss';

const RowSettings = ({ title, changeClick, children }: { title: string, changeClick: MouseEventHandler, children?: any }) => {
    return (
        <tr className={style.row}>
            <td>{title}</td>
            <td className={style.info}>
                {children}
            </td>
            <td className={style.change} onClick={changeClick}>Change</td>
        </tr>
    );
}

export default RowSettings;
