// for firestore
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import adminApp from "../../firebase/server/app";

const app = adminApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { token, password } = req.body;

    // const user = firestore.doc(`/users/${uid}`);
    // user.set({ displayName });
    res.end("HELLO");
  } catch (err) {
    res.end("error");
    return;
  }
}
