import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';

function NavBar() {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/" activeClassName="selected" exact={true}>Time</NavLink>
                <NavLink to="/expense" activeClassName="selected">Expense</NavLink>
                <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
                <NavLink to="/reports" activeClassName="selected">Reports</NavLink>
            </div>
            <div className="navbar__profile">
                <Search />
                <img src="images/user.png" alt="user.png" className="navbar__profile-img" />
            </div>
        </nav>
    )
}

export default NavBar;
