import React, { useState } from 'react'

const OTPForm = () => {
  // using SetState for phoneNumber variable
  const [phoneNumber, setPhoneNumber] = useState("")

  // function to handle phone number's
  const handlPhoneNumber = e => {
    setPhoneNumber(e.target.value)

  }
  // function to handle submt 
  const handlPhoneSubmit = e => {
    e.preventDefault();
    // alert(phoneNumber)
  }

  return (
    <div>
      <form onSubmit={handlPhoneSubmit}>
        <input 
          type="text"
          value={phoneNumber}
          placeholder='Enter Phone Number'
          onChange={handlPhoneNumber}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default OTPForm;