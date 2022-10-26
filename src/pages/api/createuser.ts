// for firestore 
import axios from "axios";
import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../firebase/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (process.env.NODE_ENV === "development") {
            await axios.get("http://localhost:3000/api/emulator");
        };
        const { uid } = req.body;
        const firestore = db();
        const userDoc = doc(firestore, '/users', uid);
        const data = await getDoc(userDoc);
        res.end(JSON.stringify(data.data()));
    } catch (err) {
        console.log(typeof err)
        res.end(JSON.stringify(err));
    }
}
