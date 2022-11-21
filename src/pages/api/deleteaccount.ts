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
    const { token } = req.body;
    const {uid} = await auth.verifyIdToken(token);
    const user = firestore.doc(`/users/${uid}`);
    await user.delete();
    await auth.deleteUser(uid);
    res.end("HELLO");
  } catch (err) {
    res.end("error");
    return;
  }
}
