import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
/**
 * Checks if username exists in the database.
 * If a user exists in the database, checks if 
 * the password provided is a match.
 * @param {String} username 
 * @param {String} password 
 */
function handleDatabaseLogin(email, password) {
    let userInfo = {

    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            userInfo.email = userCredential.user;

            // ...
        })
        .catch((error) => {
            alert("wrong")
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return userInfo;

    // if (username === "test" && password === "1")
    //     return 200;

}
/**
 * Checks if password and passwordConfirmation 
 * are the same. If so, checks if the username 
 * or email already exists in the database.
 * If not, creates a new user.
 * 
 * @param {String} email 
 * @param {String} username 
 * @param {String} password 
 * @param {String} passwordConfirmation 
 * 
 * @returns 0 in the case of an error, 200 if successful
 */
function handleCreateDatabaseAccount(email, username, password, passwordConfirmation) {
    //TODO:Should I check if pw and pwConf are the same here or in the business logic?
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}


export { handleDatabaseLogin, handleCreateDatabaseAccount };