import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import './FizzBuzzBassForm.css'


const FizzBuzzBassForm = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
      }      
    } catch (error) {
      if (error.response && error.response.data) {
        if (Array.isArray(error.response.data.detail)) {
          const errorMessages = error.response.data.detail.map((err) => err.msg).join(", ");
          setError(errorMessages);
        } else {
          setError(error.response.data.detail || "Error: Could not process your request");
        }
      } else {
        setError("Error: Could not process your request");
      }
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Enter a number</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            ref={inputRef}
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
