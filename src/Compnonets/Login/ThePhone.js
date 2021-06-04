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
import passwordImg from "../../Images/password.svg";
import ResetpasswordImg from "../../Images/ResetPasswordImg.svg";
import { Form } from "react-bootstrap";
import axios from "axios";
import TheVerifyOtp from "./TheVerifyOtp";
import "react-phone-number-input/style.css";


function ThePhone(props) {
  const [phoneBlock, setphoneBlock] = useState(true);
  const [otpBlock, setOtpBlock] = useState(false);
  const [passwordBlock, setppasswordBlock] = useState(false);
  const [uuid, setuuid] = useState(null);
  const [phno, setphno] = useState(null);
  const [OTP, setOTP] = useState("");
  const [password, setPassword] = useState(null);
  const [confirmpass, setconfirmpass] = useState(null);
  const [forgetPasswordBlock, setforgetPasswordBlock] = useState(false);
  const [ScreenOtp, setScreenOtp] = useState(false);

  const handleChangepassword = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleChangepasswordsecond = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setconfirmpass(e.target.value);
  };

  const handleChangephone = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setphno(e.target.value);
  };

  const handleOtpInput = (e) => {
    e.preventDefault();

    console.log("clicked");
    const data = { uuid: uuid, type: "o", value: parseInt(OTP) };

    axios
      .post("http://192.168.1.11:3000/auth/verifyOtpPassword", data)
      .then((res) => {
        console.log(res.data);
        if (ScreenOtp === true) {
          setforgetPasswordBlock(true);
          setppasswordBlock(false);
          setOtpBlock(false);
        } else {
          console.log("work properly");
        }
      })
      .catch((err) => console.log(err));
  };
  const handlePhoneInput = (e) => {
    e.preventDefault();
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
        setphoneBlock(false);
        if (res.data.data.otp === true) {
          setOtpBlock(true);
          setppasswordBlock(false);
        } else {
          setppasswordBlock(true);
          setOtpBlock(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordLogIn = (e) => {
    e.preventDefault();

    const data = { uuid: uuid, type: "", value: password };
    console.log(data);

    axios
      .post("http://192.168.1.11:3000/auth/verifyOtpPassword", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const hanldeForgetPassword = (e) => {
    e.preventDefault();
    setScreenOtp(true);
    const data = { uuid: uuid };
    console.log(data);

    axios
      .post("http://192.168.1.11:3000/auth/sendOtp", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.statusCode === 200) {
          setOtpBlock(true);
          setppasswordBlock(false);
        } else {
          console.log("working properly");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const forgetPasswordSection = (e) => {
    e.preventDefault();
    const data = {
      uuid: uuid,
      password: password,
      confirm_password: confirmpass,
    };
    axios
      .post("http://192.168.1.11:3000/auth/resetPassword", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const phoneNumberInput = (
    <input value={phno} onChange={(e) => handleChangephone(e)} />
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

  const remember = (
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check id="check-box" type="checkbox" label="Remember Me" />
    </Form.Group>
  );

  const forgetPassword = <a href="/">Forget password</a>;
  const passwordInput = (
    <input type="password" onChange={(e) => handleChangepassword(e)} />
  );
  const confirmpassowrd = (
    <input type="password" onChange={(e) => handleChangepasswordsecond(e)} />
  );

  const resend = (e) => {
    e.preventDefault();
    const data = { uuid: uuid };
    console.log(data);

    axios
      .post("http://192.168.1.11:3000/auth/sendOtp", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          style={{ display: "none" }}
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
          resend={(e) => resend(e)}
        />
        <TheVerifyOtp
          phone={passwordBlock}
          finallogo={passwordImg}
          close={close}
          onHide={props.onHide}
          title="Login"
          text="Please enter your password"
          phoneNumberInput={phoneNumberInput}
          backward={Backward}
          phoneimg={phoneimg}
          forgetpassword={forgetPassword}
          remember={remember}
          passwordInput={passwordInput}
          onclick={handlePasswordLogIn}
          handleForgetPassword={(e) => hanldeForgetPassword(e)}
        />

        <TheVerifyOtp
          phone={forgetPasswordBlock}
          finallogo={ResetpasswordImg}
          close={close}
          onHide={props.onHide}
          title="Confirm & Login"
          text="Please enter & confirm new password"
          secondNumberInput={confirmpassowrd}
          passwordInput={passwordInput}
          backward={Backward}
          phoneimg={phoneimg}
          remember={remember}
          onclick={forgetPasswordSection}
        />
      </Modal>
    </>
  );
}
export default ThePhone;
