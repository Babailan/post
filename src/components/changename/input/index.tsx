import style from "./style.module.scss";

function Input({ set, placeholder, error ,type }) {
  return (
    <>
      <p className={style.error}>{error}</p>
      <input
        className={`${style.input} ${error ? style.error : ""}`}
        placeholder={placeholder}
        type={type ? type:"text"}
        onChange={(e) => set(e.target.value)}
      ></input>
    </>
  );
}


export default Input;