import React from 'react'; //WE NEED THIS //importing npm modules. Have to install first
import {NavLink} from 'react-router-dom'; //using react-router-dom

const Header = () => (
    //activeClassName is a prop specifically for NavLink which adds a class onto the page we're currently on
    //adding exact onto the home page to fix the bold styling being applied to it.
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;