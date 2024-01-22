import React, { useState } from "react";
import OtpInput from "./otp-input";
import Welcome from "./welcome-page";
import { SyncLoader } from "react-spinners";
import "./styles/otp-form.css"

const OTPForm = () => {
  // using SetState for phoneNumber variable
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [code, setCode] = useState("+91")
  const [showOtpBtn, setShowOtpBtn] = useState(false)
  const [loading, setLoading] = useState(false)

  // override
  const overide = {
    // "border": '1px solid red',
    "display": "block"
  }
  // function to handle phone number's
  const handlPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    if(e.target.value.length === 10){
      setShowOtpBtn(true);
    }else{
      setShowOtpBtn(false);
      
    }
  };
  // function to handle submt
  const handlPhoneSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    // phone number validation
    const regex = / ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ /gmi;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
    } else {
      // call the backend API
      // show OTP field
      setInterval(() => {
        setShowOtpField(true);
        
      }, 2000);
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
              {/* to show the GET OTP button */}
              {showOtpBtn ? (

                loading ? (
                  // to show the GET OTP text
                    <SyncLoader cssOverride={overide} color="#e1e6f0" />
              ) : (
                // To show the spinner
                  <button type="submit" className="submit-btn"> 
                    Get OTP 
                  </button>)

              ) : (
                <>
                </>
              )  }
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
