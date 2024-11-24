import React, { useState } from "react";
import "./App.css";

function App() {
  const [usd, setUsd] = useState(""); // State to store USD input
  const [inr, setInr] = useState(""); // State to store INR output
  const exchangeRate = 82.5; // Hardcoded exchange rate (1 USD = 82.5 INR)

  // Handle input change
  const handleUsdChange = (e) => {
    const value = e.target.value;
    setUsd(value);
    if (value !== "" && !isNaN(value)) {
      setInr((value * exchangeRate).toFixed(2)); // Convert USD to INR
    } else {
      setInr(""); // Clear INR if input is invalid
    }
  };

  // Handle reset button
  const resetFields = () => {
    setUsd("");
    setInr("");
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="converter-container">
        <div className="input-group">
          <label htmlFor="usd">Enter Amount in USD:</label>
          <input
            type="text"
            id="usd"
            value={usd}
            onChange={handleUsdChange}
            placeholder="Enter USD amount"
          />
        </div>
        <div className="output-group">
          <label htmlFor="inr">Converted Amount in INR:</label>
          <input
            type="text"
            id="inr"
            value={inr}
            readOnly
            placeholder="Result in INR"
          />
        </div>
        <button onClick={resetFields} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
