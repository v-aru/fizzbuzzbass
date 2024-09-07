import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="40px"
          height="40px"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 17.93c-4.01-.47-7.18-3.87-7.72-7.93h7.72v7.93zM13 12V4.07c4.01.47 7.18 3.87 7.72 7.93h-7.72z" />
        </svg>
        <h1>FIZZ-BUZZ-BASS</h1>
      </div>
    </header>
  );
};

export default Header;
