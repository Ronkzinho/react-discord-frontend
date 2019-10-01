import React from "react";
import {Router, Route, browserHistory } from "react-router";

import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { ChangeColor } from "./pages/ChangeColor"

class App extends React.Component {

    render() {
        return (
            <Router history={ browserHistory }>
                    <Route path="/" component={ Home } />
                    <Route path={ "/user/:id" } component={ User } />
                    <Route path={ "/user/:id/changeColor"} component={ ChangeColor } />
                    <Route path={ "/home" } component={ Home } />
            </Router>
        );
    }

}

export default App;
