import React from "react";
import "../../index.css";

const Header = () => {
  return (
    <header className="bg-[#365486] dark:bg-[#17153B] text-[#EEEEEE] dark:text-white py-6 shadow-md w-full mx-auto flex items-center justify-center">
      <div className="flex justify-center items-center gap-4 mt-2 text-center max-w-max h-full">
        {/* Animated SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          className="w-12 h-12 animate-spin-slow"
          aria-label="FizzBuzzBass Icon"
        >
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 17.93c-4.01-.47-7.18-3.87-7.72-7.93h7.72v7.93zM13 12V4.07c4.01.47 7.18 3.87 7.72 7.93h-7.72z"
          className="animated-path"
          />
        </svg>
        <h1 className="text-5xl font-extrabold tracking-tight">FIZZ-BUZZ-BASS</h1>
      </div>
    </header>
  );
};

export default Header;
