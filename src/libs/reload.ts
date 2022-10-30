import axios from "axios";

async function reload(token: string) {
    const x = await axios.post("/api/getinfo", { token });
    return x.data;
}


export default reload;