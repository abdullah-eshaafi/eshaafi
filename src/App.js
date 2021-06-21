import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages

import Home from "./views/pages/home/Home";

import TheLoginSystem from "./views/pages/home/TheLoginSystem";
import Doctor_Listing from "./views/pages/DoctorListing/Doctor_Listing";
import BookAppointment from "./views/pages/BookAppointment/BookAppointment";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route exact path="/login" render={() => <TheLoginSystem />} />
          <Route
            exact
            path="/pakistan/lahore/dermatologist"
            component={Doctor_Listing}
          />
          <Route exact path="/BookAppointment" component={BookAppointment} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
