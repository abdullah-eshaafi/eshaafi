import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages

import Home from "./views/pages/home/Home";

import TheLoginSystem from "./views/pages/home/TheLoginSystem";
import Doctor_Listing from "./views/pages/DoctorListing/Doctor_Listing";
import BookAppointmentChat from "./views/pages/BookAppointment/BookAppointmentChat";
import BookAppointmentVideo from "./views/pages/BookAppointment/BookAppointmentVideo";
import Payment from "./views/pages/Payment/Payment";
import AppointmentDetails from "./views/pages/Doctor/AppointmentDetails";
import DoctorProfile from "./views/pages/Doctor/DoctorProfile";
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
          <Route
            exact
            path="/BookAppointmentChat"
            component={BookAppointmentChat}
          />
          <Route
            exact
            path="/BookAppointmentVideo"
            component={BookAppointmentVideo}
          />          <Route exact path="/AppointmentDetails" component={AppointmentDetails} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/doctorprofile" component={DoctorProfile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
