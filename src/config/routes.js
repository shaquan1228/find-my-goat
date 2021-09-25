import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//TODO: Remove App and Template before deployment. These are just tests to prove
// that routing works.
import TestPage from '../business/pages/TestPage.js';
import Template from '../business/pages/Template.js';

let pathComponent2DArray = [

    ["/", TestPage, "exact"],
    ["/test", Template, null]

]

const routes = () => (

    <BrowserRouter>

        {pathComponent2DArray.map((pathComponentArray) => {

            return (pathComponentArray[2] === "exact"
                ? <Route exact path="/"
                    component={pathComponentArray[1]} />
                : <Route path={pathComponentArray[0]}
                    component={pathComponentArray[1]} />
            )
        })}

    </BrowserRouter>

);




export default routes;