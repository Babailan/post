import { initializeApp } from 'firebase/app';
import config from './config';
const app = () => {
    return initializeApp(config());
}
export default app;
