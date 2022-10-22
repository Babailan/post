// auth firebase
import { getAuth } from 'firebase/auth'
import app from './app';

function auth() {
    const auth = getAuth(app());
    return auth;
}
export default auth;