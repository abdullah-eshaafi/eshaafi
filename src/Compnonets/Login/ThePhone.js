import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Modal } from "react-bootstrap";
import phoneimg from "../../Images/phoneimg.svg";
import finallogo from "../../Images/FinalLogo.svg";
import close from "../../Images/close.svg";
import jugar from "../../Images/jugar.svg";
import sms from "../../Images/sms.svg";
import { ResendOtp } from "../Utils/Buttons";
import Backward from "../../Images/arrow-back.svg";
import { Form } from "react-bootstrap";
import axios from "axios";
import TheVerifyOtp from "./TheVerifyOtp";
function ThePhone(props) {
  const [phoneBlock, setphoneBlock] = useState(true);
  const [otpBlock, setOtpBlock] = useState(false);
  const [passwordBlock, setpBlock] = useState(false);
  const [uuid, setuuid] = useState(null);
  const [phno, setphno] = useState(null);
  const [OTP, setOTP] = useState("");

  const remember = (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check id="check-box" type="checkbox" label="Remember Me" />
    </Form.Group>
  );

  const handleChangeinput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setphno(e.target.value);
  };
  const handleOtpInput = (e) => {
    e.preventDefault();
    setOtpBlock(false);
    console.log("clicked");
    const data = { uuid: uuid, type: "o", value: parseInt(OTP) };

    axios
      .post("http://192.168.1.11:3000/auth/verifyOtpPassword", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handlePhoneInput = (e) => {
    e.preventDefault();
    setphoneBlock(false);
    setOtpBlock(true);
    console.log("clicked");

    const data = {
      phone_no: phno,
      type: 1,
    };

    axios
      .post("http://192.168.1.11:3000/auth/login", data)
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data.otp);
        setuuid(res.data.data.uuid);
      })
      .catch((err) => console.log(err));
  };

  const phoneNumberInput = (
    <input type="phone" onChange={(e) => handleChangeinput(e)} />
  );
  const OptNumber = (
    <OTPInput
      value={OTP}
      autoFocus
      OTPLength={4}
      otpType="number"
      disabled={false}
      onChange={setOTP}
    />
  );
  return (
    <>
      <Modal show={props.show} size="lg" onHide={props.onHide} centered>
        <TheVerifyOtp
          phone={phoneBlock}
          onclick={handlePhoneInput}
          onHide={props.onHide}
          title="Continue"
          phoneimg={phoneimg}
          close={close}
          finallogo={finallogo}
          text="Please enter your phone number to login or register "
          phoneNumberInput={phoneNumberInput}
          backward={jugar}
          mainDiv={{}}
        />
        <TheVerifyOtp
          phone={otpBlock}
          finallogo={sms}
          close={close}
          onclick={handleOtpInput}
          onHide={props.onHide}
          title="Submit"
          text="Please enter the 4-digit verification
          code sent to +923215864895"
          otpInput={OptNumber}
          ResendOtp={ResendOtp}
          backward={Backward}
          phoneimg={phoneimg}
          remember={remember}
        />

        
      </Modal>
    </>
  );
}
export default ThePhone;
