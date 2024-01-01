// EmiCalculator.js

import React, { useState } from 'react';

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
    <div className="mt-8">
      <h3 className="text-4xl font-bold mb-4">EMI Calculator</h3>
      <form className="flex flex-col max-w-md mx-auto">
        <label className="mb-2">Loan Amount:</label>
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          className="border p-2 mb-4"
        />

        <label className="mb-2">Interest Rate (%):</label>
        <input
          type="number"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleChange}
          className="border p-2 mb-4"
        />

        <label className="mb-2">Loan Tenure (in years):</label>
        <input
          type="number"
          name="tenure"
          value={formData.tenure}
          onChange={handleChange}
          className="border p-2 mb-4"
        />

        <button
          type="button"
          onClick={calculateEmi}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Calculate EMI
        </button>
      </form>

      {emi !== null && (
        <div className="mt-4">
          <h4 className="text-xl font-bold">Your Monthly EMI:</h4>
          <p className="text-2xl">{emi} INR</p>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
