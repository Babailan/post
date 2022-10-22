import { NextApiRequest, NextApiResponse } from "next";
import auth from "../../firebase/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        const s = auth();
        const f = await s.signOut();
        res.end();
    } catch (err) {
        res.statusCode = 200;
        res.end();
    }
}