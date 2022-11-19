import { initializeApp, cert } from 'firebase-admin/app';
import serviceAccount from './ice-cream-d26d3-firebase-adminsdk-qae0x-b3c1587723.json';


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const adminApp = () => {
    return initializeApp({
        credential: cert({
            "clientEmail": serviceAccount.client_email,
            "privateKey": serviceAccount.private_key,
            "projectId": serviceAccount.project_id
        }),
    }, makeid(10));
}


export default adminApp;