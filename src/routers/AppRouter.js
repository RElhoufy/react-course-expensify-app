import React from 'react'; //WE NEED THIS //importing npm modules. Have to install first
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; //using react-router-dom
//BrowserRouter and Route for going through pages
//Switch Renders the first child <Route> or <Redirect> that matches the location.
//Link a way to reroute using client side routing instead of server-side routing
//NavLink
//react router passes information in props which can be useful. Props only passes information in the specific components

import ExpenseDashboardPage from "../components/ExpenseDashboard";
import AddExpensePage from "../components/AddExpense";
import EditExpensePage from "../components/EditExpense";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header /> 
            <Switch>    
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
