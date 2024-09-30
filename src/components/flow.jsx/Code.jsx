import React, { useState } from 'react';

const Code = () => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (index, value) => {
    // Ensure only numbers are entered
    if (!isNaN(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus on the next input field
      if (value && index < 3) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    // Logic to resend verification code
    console.log('Resend code clicked');
  };

  const handleVerify = () => {
    // Logic to verify the entered code
    const enteredCode = code.join('');
    console.log('Verifying code:', enteredCode);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#0f1722] rounded-lg p-10 w-fit">
        <h2 className="text-2xl text-white font-bold mb-4">Verify Your Account</h2>
        <p className="text-gray-500 mb-6">Enter the 4 digit code sent to the registered email Id.</p>

        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-14 h-12 text-center text-white bg-black text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          ))}
        </div>

        <div className='flex flex-col'>
          <button
            className="text-blue-500 hover:text-blue-700 text-sm mb-4"
            onClick={handleResend}
          >
            Did not receive a code? Resend
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>

        <p className="text-red-500 text-sm mt-4">
          *Don't share the verification code with anyone!
        </p>
      </div>
    </div>
  );
};

export default Code;