import React from "react";
import Calender from "../../../Images/BookAppointment/calendar.svg";
import BookAppointment from "./BookAppointment";
function BookAppointmentVideo() {
  return (
    <>
      {" "}
      <BookAppointment
        Chat_icon={Calender}
        Chat_terms="By continuing you agree to terms & conditions "
      />
    </>
  );
}

export default BookAppointmentVideo;
