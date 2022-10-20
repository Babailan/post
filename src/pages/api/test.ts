import type { NextApiRequest, NextApiResponse } from "next";
// firestore -> https://firebase.google.com/docs/reference/js/firestore.md#firestore_package;
import firestoreDB from '../../firebase/db';
import { collection, doc, getDoc } from 'firebase/firestore'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = firestoreDB();
    const y = doc(db, '/users', 'L7RqA4MU2qrd49O1YVY2');
    const yadwd = await getDoc(y);
    res.end(JSON.stringify(yadwd.data()));
}

