import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../components/pages/Home"
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class MyRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/resume" component={Resume}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
        );
    }
}

export default MyRouter;