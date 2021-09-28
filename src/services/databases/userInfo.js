import store from "../../config/store";

/**
 * Checks if username exists in the database.
 * If a user exists in the database, checks if 
 * the password provided is a match.
 * @param {String} username 
 * @param {String} password 
 */
function handleDatabaseLogin(username, password) {

    if (username === "1" && password === "1")
        return store.dispatch({ type: 'log in' }) && 200;

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
}


export { handleDatabaseLogin, handleCreateDatabaseAccount };