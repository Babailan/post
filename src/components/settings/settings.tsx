import row from "./info";
import style from "./style.module.scss";

export function Settings({ info }) {
    return (
        <div className={style.container}>
            <h2>General account settings</h2>
            <br />
            <hr />
            <br />
            <table className={style.pyramid}>
                <tbody>
                    {row.map((v, index) => {
                        if (v.identifier === "password") {
                            return (
                                <tr key={index}>
                                    <td>{v.col1}</td>
                                    <td>{v.col2}</td>
                                    <td className={style.change}>Change</td>
                                </tr>
                            );
                        }
                        const y = eval("v.identifier");
                        return (
                            <tr key={index}>
                                <td>{v.col1}</td>
                                <td style={{ "textTransform": `${y == "displayName" ? "capitalize" : null}` }}>{eval(`info.${y}`)}</td>
                                <td className={style.change}>Change</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
