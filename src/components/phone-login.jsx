import React, { useState } from "react";
import OtpInput from "./otp-input";

const OTPForm = () => {
  // using SetState for phoneNumber variable
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

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
    console.log('Log in Successfull', otp);
  }

  return (
    <div>
      {!showOtpField ? (
        <form onSubmit={handlPhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            placeholder="Enter Phone Number"
            onChange={handlPhoneNumber}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber} </p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default OTPForm;