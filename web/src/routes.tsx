import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';
import Main from './pages/Main';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/add" component={AddContact} />
            <Route path="/edit" component={EditContact} />
        </BrowserRouter>
    );
}

export default Routes;