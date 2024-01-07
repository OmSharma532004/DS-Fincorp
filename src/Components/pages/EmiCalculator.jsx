// EmiCalculator.js

import React, { useState } from 'react';
import emi2 from "../data/Homepage/emi2.jpeg"

const EmiCalculator = () => {
  const [formData, setFormData] = useState({
    loanAmount: '',
    interestRate: '',
    tenure: '',
  });

  const [emi, setEmi] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateEmi = () => {
    const principal = parseFloat(formData.loanAmount);
    const rateOfInterest = parseFloat(formData.interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(formData.tenure) * 12;

    // EMI Calculation Formula
    const emiAmount =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    setEmi(emiAmount.toFixed(2));
  };

  return (
    <div className=" flex flex-row  justify-around gap-4 h-screen flex-wrap items-center  ">
     <div className='lg:w-[50%] emi transition-all duration-200 rounded-xl overflow-hidden border-4 border-yellow-300'> <img src={emi2}></img> </div>
     <div>
         <h3 className="text-4xl font-bold mb-4 text-yellow-300">EMI Calculator</h3>
      <form className="flex flex-col justify-around  flex-wrap items-center max-w-md mx-auto">
        <label className="mb-2">Loan Amount:</label>
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          className="border text-black p-2 mb-4"
        />

        <label className="mb-2">Interest Rate (%):</label>
        <input
          type="number"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleChange}
          className="border  text-black  p-2 mb-4"
        />

        <label className="mb-2">Loan Tenure (in years):</label>
        <input
          type="number"
          name="tenure"
          value={formData.tenure}
          onChange={handleChange}
          className="border  text-black  p-2 mb-4"
        />

        <button
          type="button"
          onClick={calculateEmi}
          className=" bg-yellow-300 text-black font-bold mt-3 py-2 px-4 rounded"
        >
          Calculate EMI
        </button>
      </form>

      {emi !== null && (
        <div className="mt-4 bg-yellow-300 text-black">
          <h4 className="text-xl font-bold">Your Monthly EMI:</h4>
          <p className="text-2xl">{emi} INR</p>
        </div> 
      )}</div>
    </div>
  );
};

export default EmiCalculator;
