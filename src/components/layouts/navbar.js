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

                        {/*<li className="active"><a href="index.html"><i*/}
                        {/*    className="icon icon-House"></i><span>Home</span></a></li>*/}
                        {/*<li><a href="resume.html"><i className="icon icon-User"></i><span>Resume</span></a></li>*/}
                        {/*<li><a href="portfolio.html"><i className="icon icon-Bulb"></i><span>Portfolio</span></a>*/}
                        {/*</li>*/}
                        {/*<li><a href="blog.html"><i className="icon icon-ClipboardText"></i><span>Blog</span></a>*/}
                        {/*</li>*/}
                        {/*<li><a href="contact.html"><i className="icon icon-Imbox"></i><span>Contact</span></a>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
                <a className="sidebarToggler"><span><span></span><span></span><span></span></span></a>
            </header>

        );
    }
}

export default Navbar;