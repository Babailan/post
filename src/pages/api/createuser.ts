// for firestore 
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import adminApp from "../../firebase/server/app";


const app = adminApp();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(app.name);
        const { displayName, email, password } = req.body;
        const auth = getAuth(app);
        const { uid } = await auth.createUser({ email, password, displayName });
        const firestore = getFirestore(app);
        const doc = firestore.doc(`/users/${uid}`);
         await doc.create({ displayName, email });
        res.end(JSON.stringify(req.body));
    } catch (err) {
        console.table(err);
        res.statusCode = 500;
        res.end(JSON.stringify(err));
        return;
    }
};