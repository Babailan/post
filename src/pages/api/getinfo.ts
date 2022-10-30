import { NextApiRequest, NextApiResponse } from "next";
import { decode } from 'jsonwebtoken';
import { doc, getDoc, getDocFromServer } from "firebase/firestore";
import db from "../../firebase/db";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method.toLowerCase() === "post") {
            if (process.env.NODE_ENV === "development") {
                await axios.get("http://localhost:3000/api/emulator");
            };
            const { token } = req.body;
            const { user_id } = decode(token) as { user_id: string };
            const userQuery = doc(db(), '/users', user_id.toString());
            const y = await getDocFromServer(userQuery);
            res.end(JSON.stringify(y.data()));
        }
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        res.end("there something wrong");

    }
};