import type { NextApiRequest, NextApiResponse } from "next";
// firestore -> https://firebase.google.com/docs/reference/js/firestore.md#firestore_package;
import firestoreDB from '../../firebase/db';
import { collection, addDoc } from 'firebase/firestore'
import phash from "../../libs/phash";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const hashedPassword = await phash(req.body.password);
    req.body.password = hashedPassword;
    const db = firestoreDB();
    const usersQueryCollection = collection(db, '/users')
    if (Object.prototype.toString.call(req.body) === '[object Object]') {
        await addDoc(usersQueryCollection, req.body);
        res.end("successfully made");
    } else {
        res.end("nah");
    };
}

