import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';


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
      <div className="flex items-center justify-center min-h-[75vh] bg-[#DCF2F1] dark:bg-indigo-950 dark:text-gray-300">
        <div className="bg-white dark:bg-[#EEEEEE] border-2 border-[#1B1A55] p-6 rounded-2xl shadow-lg dark:shadow-custom-dark w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-4">Enter a number</h2>
          <form onSubmit={handleSubmit} className="space-y-4 dark:bg-[#EEEEEE]">
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter a number"
              ref={inputRef}
              className="border-2 border-[#d1d5db] p-3 w-full max-w-xs rounded-lg text-lg placeholder:text-gray-400 bg-white shadow-md transition-all duration-300 focus:border-[#535C91] focus:ring-2 focus:ring-[#535C91] outline-none text-center text-[#333]"
            />
            <br/>
            <button
              type="submit"
              className="py-3 px-5 text-lg text-white bg-[#3b82f6] border-none rounded-full cursor-pointer mt-4 transition-transform duration-200 transform hover:bg-[#2563eb] hover:scale-105 active:bg-[#1d4ed8] active:scale-100 "
          >
              Submit
            </button>
          </form>
  
          {loading && (
            <div className="mt-4 text-lg font-bold text-[#3b82f6] animate-pulse">
              Loading...
            </div>
          )}
  
          {result && (
            <div className="mt-5 p-4 text-lg rounded-lg bg-[#d1fae5] text-[#065f46] transform scale-105 transition-transform duration-200">
              Result: {result}
            </div>
          )}
  
          {error && (
            <div className="mt-5 p-4 text-lg rounded-lg bg-[#fee2e2] text-[#b91c1c] transform scale-105 transition-transform duration-200">
              {error}
            </div>
          )}
        </div>
      </div>
    );
}

export default FizzBuzzBassForm;
