import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../components/pages/Home"
import Resume from "./pages/Resume";

class MyRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/resume" component={Resume}/>
            </Switch>
        );
    }
}

export default MyRouter;