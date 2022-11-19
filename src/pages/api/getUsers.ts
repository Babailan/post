// for firestore 
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import adminApp from "../../firebase/server/app";

const app = adminApp();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { displayName, email, password } = req.body;
        const firestore = getFirestore(app);
        const usersCollection = firestore.collection("/users");

        const data = await usersCollection.get();
        data.forEach((v) => {
            console.log(v.data());
        })
        res.end("HEE");
    } catch (err) {
        console.log(err);
        res.statusCode = 500;
        res.end("THERE IS ERROR");
        return;
    }
};