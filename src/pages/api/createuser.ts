// for firestore 
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import adminApp from "../../firebase/server/app";


const app = adminApp();
const auth = getAuth(app);
const firestore = getFirestore(app);


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { displayName, email, password } = req.body;
        const { uid } = await auth.createUser({ email, password, displayName });
        const doc = firestore.doc(`/users/${uid}`);
         await doc.create({ displayName, email });
        res.end(JSON.stringify(req.body));
    } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify(err));
        return;
    }
};