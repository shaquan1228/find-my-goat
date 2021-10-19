// https://redux.js.org/introduction/getting-started
import { Form } from 'react-bootstrap';
import { createStore } from 'redux';

var prevSessionInfo = { sessionID: 0 };

try {
    prevSessionInfo = {
        loggedIn: (localStorage.getItem('sessionInfoIsLoggedIn') === 'true'),
        //         sessionID: localStorage.getItem('sessionInfoID'),
        username: localStorage.getItem('sessionInfoUsername'),
        aviURL: localStorage.getItem('sessionInfoAviURL')
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
                aviURL: action.payload.aviURL
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
        localStorage.setItem('sessionInfoAviURL', state.aviURL);

    }
    else { //This else is unneccesarry if i remove the if.
        localStorage.removeItem('sessionInfoIsLoggedIn');
        localStorage.removeItem('sessionInfoUsername');
        localStorage.removeItem('sessionInfoAviURL');
    }


})



export default store;


