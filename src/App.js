import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import Login from "./views/pages/login/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'  render={props => <Login {...props} />} />
          <Route exact path='/login'  render={props => <Login {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
