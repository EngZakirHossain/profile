import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <header className="header clearfix">
                <nav className="mainMenu">
                    <ul className="clearfix">
                        <li><NavLink exact activeStyle={{color: 'green'}} to="/"><i className="icon icon-House"></i><span>Home</span></NavLink></li>
                        <li><NavLink exact activeStyle={{color: 'green'}} to="/resume"><i className="icon icon-User"></i><span>Resume</span></NavLink></li>
                        <li><NavLink exact activeStyle={{color: 'green'}} to="/portfolio"><i className="icon icon-Bulb"></i><span>Portfolio</span></NavLink></li>
                        <li><NavLink exact activeStyle={{color: 'green'}} to="/contact"><i className="icon icon-Inbox"></i><span>Contact</span></NavLink></li>

                    </ul>
                </nav>
                <a className="sidebarToggler"><span><span></span><span></span><span></span></span></a>
            </header>

        );
    }
}

export default Navbar;