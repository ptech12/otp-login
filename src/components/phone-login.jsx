import React, { useState } from "react";
import OtpInput from "./otp-input";
import Welcome from "./welcome-page";

const OTPForm = () => {
  // using SetState for phoneNumber variable
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);

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
          <h1>Login with Phone</h1>
          <form onSubmit={handlPhoneSubmit}>
            <input
              type="text"
              value={phoneNumber}
              placeholder="Enter Phone Number"
              onChange={handlPhoneNumber}
            />
            <button type="submit">Submit</button>
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
