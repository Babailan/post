// firebase validator 
// https://firebase.google.com/docs/auth/admin/errors
function code(errorCode: string) {
    const setterObject = {
        username: "",
        password: "",
        email: ""
    }
    console.log(JSON.stringify(errorCode));
    if (errorCode.includes("auth/invalid-email")) {
        setterObject.email = "Invalid email address."
    }
    if (errorCode.includes("user-not-found")) {
        setterObject.email = "No user found."
    }
    if (errorCode.includes("wrong-password")) {
        setterObject.password = "Wrong password."
    }
    return setterObject;
}


export default code;