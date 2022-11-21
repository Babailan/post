import style from './style.module.scss';

function Input({placeholder,set}) {

  return (
    <input className={style.input} placeholder={placeholder} onChange={(e)=>set(e.target.value)}></input>
  );
}

export default Input;
