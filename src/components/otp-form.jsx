import React, { useState } from "react";
import OtpInput from "./otp-input";
import Welcome from "./welcome-page";

import "./styles/otp-form.css"

const OTPForm = () => {
  // using SetState for phoneNumber variable
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [code, setCode] = useState("+91")

  // function to handle phone number's
  const handlPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  // function to handle submt
  const handlPhoneSubmit = (e) => {
    e.preventDefault();

    // phone number validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
    } else {
      // call the backend API
      // show OTP field
      setShowOtpField(true);
    }
  };

  // onOtpSubmit
  const onOtpSubmit = (otp) => {
    console.log("Log in Successfull", otp);
    setOtpSuccess(true);
  };

  return (
    <div>
      {!showOtpField ? (
        <>
          <h4 className="heading">Login or sign up to continue</h4>
          <form className="form-box" onSubmit={handlPhoneSubmit}>
            <input 
            type="text" 
            name="code" 
            id="code" 
            value={code}
            className="country-code"

             />
            <input
              type="text"
              value={phoneNumber}
              placeholder="Enter Phone Number"
              onChange={handlPhoneNumber}
              className="input-box"
            />
          <button type="submit" className="submit-btn">Get OTP</button>
          </form>
        </>
      ) : !otpSuccess ? (
        <div>
          <h1>Enter OTP</h1>
          <p>OTP has sent to {phoneNumber} </p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default OTPForm;
