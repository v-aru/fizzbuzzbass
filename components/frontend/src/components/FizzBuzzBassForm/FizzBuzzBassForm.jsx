import React, { useState } from "react";
import axios from "axios";



const FizzBuzzBassForm = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/fizzbuzzbass', {
        number: parseInt(number, 10),
      });


      if(response.data && response.data.result) {
        setResult(response.data.result);
        setError(null);
      } else {
        return;
      }
      
    } catch (error) {
      setError("Error: Could not process your request");
      setResult(null);
    }
  }

  //console.log(result, error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center">FizzBuzzBass</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        {console.log("Result:", result, "Error:", error)}

        {result && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
            Result: {result}
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-md">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default FizzBuzzBassForm;