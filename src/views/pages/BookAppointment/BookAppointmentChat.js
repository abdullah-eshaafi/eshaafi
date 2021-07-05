import React from "react";
import Chat_Icon from "../../../Images/BookAppointment/Chat_Icon.svg";
import BookAppointment from "./BookAppointment";
function BookAppointmentChat() {
  return (
    <>
      <BookAppointment
        Chat_icon={Chat_Icon}
        Chat_terms="Chat will automatically end after 24 hours"
        Chat_desc="By continuing you agree to terms & conditions "
      />
    </>
  );
}

export default BookAppointmentChat;
