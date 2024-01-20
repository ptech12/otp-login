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
	
	

	

	const handleChange = () => {};
	const handleClick = () => {};
	const handleKeyDown = () => {};




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
