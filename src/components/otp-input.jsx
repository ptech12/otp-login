import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
	const [otp, setOtp] = useState(new Array(length).fill(""));
	const inputRefs = useRef([]);

	/**
	 * useEffect Hook
	 * Whenever a component is rendered
	 * the useEffect hook is called
	 */
	useEffect(() => {
		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, [])
	
	

	

	const handleChange = (index, e) => {
		const value = e.target.value;
		if (isNaN(value)) {
			return;
		}
		const newOtp = [...otp];
		//allow only one otp digit
		newOtp[index] = value.substring(value.length - 1);
		setOtp(newOtp);

		//submit trigger
		const combinedOtp = newOtp.join("")
		console.log(combinedOtp);
		// strictly len of combined OTP = length of the OTP fields
		if(combinedOtp.length === length)	onOtpSubmit(combinedOtp)

		// move to next input if current field is filled
		if (value && index < length - 1 && inputRefs.current[index + 1]) {
			inputRefs.current[index + 1].focus();
		}



	};


	const handleClick = index => {
		// set cursor to next of the digit
		inputRefs.current[index].setSelectionRange(1,1);

		// move the previous digit
		// if it is empty
		if(index > 0 && !otp[index - 1]){
			inputRefs.current[otp.indexOf("")].focus()
		} 

		if(index < length - 1){
			inputRefs.current[otp.indexOf("")].focus();
		}


	};

	const handleKeyDown = (index, e) => {
		if(e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]){
			inputRefs.current[index - 1].focus();

		}
	};




	return <div>
		{
			otp.map((value, index) => {
				return <input
				key={index}
				type="text"
				ref={(input) => inputRefs.current[index] = input} 
				value={value}
				onChange={(e) => handleChange(index, e)}
				onClick={() => handleClick(index)}
				onKeyDown={(e) => handleKeyDown(index, e)}
				className="otp-input"
				/>

			})
		}
	</div>;
};

export default OtpInput;
