import React, { useState } from "react";
import axios from "axios";

const FizzBuzzBassForm = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/fizzbuzzbass', {
        number: parseInt(number, 10),
      });

      if (response.data && response.data.result) {
        setResult(response.data.result);
        setError(null);
      } else {
        setResult(null);
      }
      
    } catch (error) {
      setError("Error: Could not process your request");
      setResult(null);
    }

    setLoading(false);
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>FizzBuzzBass</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>

        {loading && <div className="loader">Loading...</div>}
        
        {result && (
          <div className={`result result-success`}>
            Result: {result}
          </div>
        )}

        {error && (
          <div className={`result result-error`}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default FizzBuzzBassForm;
