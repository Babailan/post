import type { NextApiRequest, NextApiResponse } from "next";
// firestore -> https://firebase.google.com/docs/reference/js/firestore.md#firestore_package;
import firestoreDB from '../../firebase/db';
import { collection } from 'firebase/firestore'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const db = firestoreDB();
        const auth = await auths(req.body);
        const usersQueryCollection = collection(db, '/users');
        res.end(JSON.stringify(auth));
    } catch (err) {
        res.statusCode = 200;
        res.end(JSON.stringify(err));
    }
}


// auth firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from "../../firebase/auth";


const auths = async (n: { email: string, password: string }) => {
    return await createUserWithEmailAndPassword(auth(), n.email, n.password);
}