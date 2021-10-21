import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, child, get, ref } from "firebase/database";
import firestoreConfig from "../firestoreConfig";

const auth = getAuth();
const userDB = getDatabase(firestoreConfig);
const userDBRef = ref(userDB);
/**
 * Checks if username exists in the database.
 * If a user exists in the database, checks if 
 * the password provided is a match.
 * @param {String} username 
 * @param {String} password 
 */
async function handleDatabaseLogin(email, password) {
    try {

        let userAuthorization = await signInWithEmailAndPassword(auth, email, password).catch(err => console.log(err))
        let userAuthentication = await get(child(userDBRef, `/users/\"${userAuthorization.user.uid}\"`)).catch(err => console.log(err))

        return userAuthentication.val();
    }
    catch (err) { console.error(err) }

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