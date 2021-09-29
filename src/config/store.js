// https://redux.js.org/introduction/getting-started
import { Form } from 'react-bootstrap';
import { createStore } from 'redux';

//TODO: Remove logoURL tester
const logoUrl = "https://s3.getstickerpack.com/storage/uploads/sticker-pack/random-stickers-1/23.png?ef2e3aa79b8296988bd04a93c62c210c"

var prevSessionInfo = { sessionID: 0 };


// const [loggedIn, setLoggedIn] = useLocalStorage('sessionInfoIsLoggedIn');
// const [sessionID, setSessionID] = useLocalStorage('sessionInfoID');
// const [username, setUsername] = useLocalStorage('sessionInfoUsername');
// const [aviURL, setAviURL] = useLocalStorage('sessionInfoAviURL');

// sessionID: setSessionInfo('sessionInfoID', 999),
// username: setSessionInfo('sessionInfoUsername', 'testquan'),
// aviURL: setSessionInfo('sessionInfoAviURL', 'https://pbs.twimg.com/media/Ds6GQkWUUAAyvy6.jpg')

try {
    prevSessionInfo = {
        loggedIn: (localStorage.getItem('sessionInfoIsLoggedIn') === 'true'),
        //         sessionID: localStorage.getItem('sessionInfoID'),
        username: localStorage.getItem('sessionInfoUsername'),
        aviUrl: 'test'
        //         aviURL: localStorage.getItem('sessionInfoAviURL')
    }
}
catch (err) {

}

function sessionInfoReducer(state = prevSessionInfo, action) {
    switch (action.type) {
        case 'log in':
            return {
                loggedIn: true,
                username: action.payload.username,
                aviURL: 'https://pbs.twimg.com/media/Ds6GQkWUUAAyvy6.jpg'
            }
        case 'log out':
            return {
                loggedIn: false,
                username: '',
                aviURL: null

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

store.subscribe(() => {
    let state = store.getState()
    if (state.loggedIn === true) {
        localStorage.setItem('sessionInfoIsLoggedIn', state.loggedIn)
        localStorage.setItem('sessionInfoUsername', state.username);

    }
    else { //This else is unneccesarry if i remove the if.
        localStorage.removeItem('sessionInfoIsLoggedIn');
        localStorage.removeItem('sessionInfoUsername');
    }


})



export default store;


