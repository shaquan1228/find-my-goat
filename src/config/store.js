// https://redux.js.org/introduction/getting-started
import { createStore } from 'redux';

//TODO: Remove logoURL tester
const logoUrl = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-stickers-1/23.png?ef2e3aa79b8296988bd04a93c62c210c"

var prevSessionInfo = { sessionID: 0 };
try {
    prevSessionInfo = {
        loggedIn: localStorage.getItem('sessionInfoIsLoggedIn'),
        sessionID: localStorage.getItem('sessionInfoID'),
        username: localStorage.getItem('sessionInfoUsername'),
        aviURL: localStorage.getItem('sessionInfoAviURL')
    }

}
catch (err) {

}
const setSessionInfo = (refName, item) => { localStorage.setItem(refName, item); return item }
const removeSessionInfo = (refName, item) => { localStorage.removeItem(refName); return null; }

function sessionInfoReducer(state = prevSessionInfo, action) {
    switch (action.type) {
        case 'log in':
            return {
                loggedIn: setSessionInfo('sessionInfoIsLoggedIn', true),
                sessionID: setSessionInfo('sessionInfoID', 999),
                username: setSessionInfo('sessionInfoUsername', 'testquan'),
                aviURL: setSessionInfo('sessionInfoAviURL', 'https://pbs.twimg.com/media/Ds6GQkWUUAAyvy6.jpg')
            }
        case 'log out':
            return {
                loggedIn: removeSessionInfo('sessionInfoIsLoggedIn'),
                sessionID: removeSessionInfo('sessionInfoID'),
                username: removeSessionInfo('sessionInfoUsername'),
                aviURL: removeSessionInfo('sessionInfoAviURL')
            }
        default:
            return state
    }

}

let store = createStore(sessionInfoReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.
// store.subscribe(() => console.log(store.getState().sessionID))

export default store;


