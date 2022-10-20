import { initializeApp } from 'firebase/app';
import { setDoc, doc, getFirestore } from 'firebase/firestore';
import config from './config';
export default () => {
    return initializeApp(config());
}
