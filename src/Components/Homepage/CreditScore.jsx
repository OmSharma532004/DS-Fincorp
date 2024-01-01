// CreditScore.js

import React, { useState } from 'react';

const CreditScore = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    income: '',
  });

  const [creditScore, setCreditScore] = useState(null);
  const [scoreMessage, setScoreMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCreditScore = () => {
    // Add your credit score calculation logic here based on user details
    // For simplicity, let's assume a basic calculation
    const basicScore = 500;
    const ageScore = parseInt(formData.age, 10) * 5;
    const incomeScore = parseInt(formData.income, 10) * 0.1;

    const totalScore = basicScore + ageScore + incomeScore;
    setCreditScore(totalScore);

    // Set a threshold for a "Good" credit score (adjust as needed)
    const goodScoreThreshold = 700;

    // Determine the message based on the calculated credit score
    if (totalScore >= goodScoreThreshold) {
      setScoreMessage('Good Credit Score! Keep it up.');
    } else {
      setScoreMessage('Not Good Credit Score. Consider improving it.');
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-4xl font-bold mb-4">Check Your Credit Score</h3>
      <form className="flex flex-col max-w-md mx-auto">
        <label className="mb-2">First Name:</label>
        <input

          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="border p-2 mb-4 text-black "
        />

        <label className="mb-2">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="border p-2 mb-4 text-black"
        />

        <label className="mb-2">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 mb-4 text-black"
        />

        <label className="mb-2">Income:</label>
        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          className="border p-2 mb-4 text-black"
        />

        <button
          type="button"
          onClick={calculateCreditScore}
          className="bg-blue-500 text-white py-2 px-4  rounded"
        >
          Calculate Credit Score
        </button>
      </form>

      {creditScore !== null && (
        <div className="mt-4">
          <h4 className="text-xl font-bold">Your Credit Score:</h4>
          <p className="text-2xl">{creditScore}</p>
          <p className="text-lg mt-2">{scoreMessage}</p>
        </div>
      )}
    </div>
  );
};

export default CreditScore;
