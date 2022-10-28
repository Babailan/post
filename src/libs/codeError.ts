// firebase validator 
// https://firebase.google.com/docs/auth/admin/errors
function code(errorCode: string) {
    const setterObject = {
        displayName: "",
        password: "",
        email: ""
    }
    if (errorCode.includes("auth/invalid-email")) {
        setterObject.email = "Invalid email address.";
    }
    if (errorCode.includes("user-not-found")) {
        setterObject.email = "No user found.";
    }
    if (errorCode.includes("wrong-password")) {
        setterObject.password = "Wrong password."
    } if (errorCode.includes("email-already-in-use")) {
        setterObject.email = "Email is already taken.";
    }
    if (errorCode.includes("weak-password")) {
        setterObject.password = "Weak password";
    }
    return setterObject;
}


export default code;