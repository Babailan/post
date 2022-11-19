// for firestore 
import { getFirestore } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import adminApp from "../../firebase/server/app";


const app = adminApp();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(app.name)
        res.end();
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        res.end("THERE IS ERROR");
        return;
    }
};