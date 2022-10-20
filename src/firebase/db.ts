import { getFirestore } from "firebase/firestore"
import app from "./app";
// import the config

// get the firestore service which is from firebase -> 
// usage -> to get the database and query shits, i know it the usage of database ye that's it.
export default () => {
    const firestore = getFirestore(app());
    return firestore;
};