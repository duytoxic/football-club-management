import React from 'react';
// import { SidebarItem } from "./SidebarItem";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Sidebar.scss";

function Sidebar() {
    return (
        <Router>
            <div className="sidebar-container">
                <ul>
                    <li>
                        <Link to="/"> People Management </Link>
                    </li>
                    <li>
                        <Link to="/"> Calander </Link>
                    </li>
                    <li>
                        <Link to="/"> Logout </Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

export default Sidebar
