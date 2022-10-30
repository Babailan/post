// for firestore 
import { connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import auth from "../../firebase/auth";
import db from "../../firebase/db";

// for development only this api is to change the firebase to emulator suite;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (process.env.NODE_ENV === "development") {
        if (!process.env.emulator) {
            process.env.emulator = "1";
            // first run on server;
            connectAuthEmulator(auth(), 'http://localhost:9099');
            connectFirestoreEmulator(db(), 'localhost', 8080);
        }
    }
    res.end("YES")
}
