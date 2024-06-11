import React from "react";
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                    </li>
                    <li>
                        <Link to="/tickets">Tickets</Link>
                    </li>
                    <li>
                        <Link to="/submit-ticket"></Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>
                
            </ul>
        </nav>
    );
};
export default NavBar;