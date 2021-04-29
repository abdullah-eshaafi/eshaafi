import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import Login from "./views/pages/login/Login";
import Home from "./views/pages/home/Home";
import TheLayout from "./container/TheLayout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'  render={() => <Home />} />
          <Route exact path='/login'  render={() => <Login />} />
          <Route exact path='/dashboard'  render={() => <TheLayout />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
