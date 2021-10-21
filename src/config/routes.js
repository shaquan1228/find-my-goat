import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//TODO: Remove App and Template before deployment. These are just tests to prove
// that routing works.
import TestPage from '../business/pages/TestPage.js';
import Template from '../business/pages/Template.js';
import NavigationBar from '../business/components/navigation/NavigationBar.js';
import Login from '../business/pages/Login.js';

import 'bootstrap/dist/css/bootstrap.min.css'; //TODO: Move to a new file in config? To allow for more bootstap styling...
import { Provider } from "react-redux";
import store from './store.js';

let pathComponent2DArray = [

    ["/", TestPage, "exact"],
    ["/test", Template, null],
    ["/login", Login, null],

]

const routes = () => (

    <BrowserRouter>
        <Provider store={store}>
            {/* TODO: Remove this comment intended to explain a new concept.
                This Provider helps us pass the store state as props using connect() in react-redux.
                See UserMenu.js in business/components/navigation for a good example.
            */}
            <Route path="/" component={NavigationBar} />

            {pathComponent2DArray.map((pathComponentArray) => {

                return (pathComponentArray[2] === "exact"
                    ? <Route exact path="/"
                        component={pathComponentArray[1]} />
                    : <Route path={pathComponentArray[0]}
                        component={pathComponentArray[1]} />
                )
            })}

        </Provider>
    </BrowserRouter>

);




export default routes;