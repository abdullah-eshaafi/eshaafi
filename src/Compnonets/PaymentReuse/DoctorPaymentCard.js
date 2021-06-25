import React, { useState } from "react";
import DoctorPic from "../../Images/Payment/BA-Doctor-PP.svg";
import Clock from "../../Images/Payment/Calender.svg";
import money from "../../Images/Payment/money.svg";
import "./DoctorPaymentCard.css";
import Switch from "react-switch";
function DoctorPaymentCard() {
  const [checked, setChecked] = useState(false);

  const handleChangetoggle = (checked) => {
    setChecked(checked);
  };

  return (
    <div className="Doctor-payment-Card">
      <div className="Doctor-payment-profile">
        <div className="doctor-img-heading">
          <img src={DoctorPic} alt="Doctor profile pic" />
          <h3>Dr. Neslihan Atagul</h3>
          <h4>Online Video Consultation</h4>
        </div>

        <div className="d-flex justify-content-center">
          <div className="date-time-wrapper">
            <span className="d-flex">
              <img src={Clock} />
              <h3> Mon, Sept 07</h3>
            </span>
            <span className="d-flex">
              <img src={Clock} />
              <h3> 00:00 AM</h3>
            </span>
          </div>
        </div>
      </div>

      <div className="Doctor-fee d-flex justify-content-center">
        <img src={money} />
        <h3>Rs. 1,000</h3>
      </div>

      <div className="d-flex justify-content-center voucher-main-container">
        <input type="text" placeholder="Enter voucher code" id="voucher-code" />
        <div>
          <button type="button" id="voucher-code-btn">
            Apply
          </button>
        </div>
      </div>

      <label style={{ marginTop: "10px" }}>
        <Switch
          onChange={handleChangetoggle}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#F0F0F0"
          offHandleColor="CCCCCC"
          onColor="#E0F3F2"
          onHandleColor="#009B94"
        />
      </label>
    </div>
  );
}

export default DoctorPaymentCard;
