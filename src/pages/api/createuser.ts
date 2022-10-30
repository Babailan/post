// for firestore 
import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, getDocFromServer, doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import auth from "../../firebase/auth";
import db from "../../firebase/db";



// for creating user and also change the username from auth;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (process.env.NODE_ENV === "development") {
            await axios.get("http://localhost:3000/api/emulator");
        };
        const { displayName, email, password } = req.body;
        const { user } = await createUserWithEmailAndPassword(auth(), email, password);
        const firestore = db();
        const userData = doc(firestore, '/users', user.uid);
        const userDoc = await getDocFromServer(userData);
        // if not exist create one in firestore also change the display name in auth firebase.
        if (!userDoc.exists()) {
            setDoc(userData, { displayName, email });
            updateProfile(user, { displayName });
        };
        res.end(JSON.stringify(req.body));
        // const set = await setDoc(userDoc, { displayName });
    } catch (err) {
        res.statusCode = 500;
        res.end(JSON.stringify(err));
        return;
    }
}
