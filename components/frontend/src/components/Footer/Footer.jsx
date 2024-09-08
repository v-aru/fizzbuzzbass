import React from "react";
import DarkModeToggle from '../DarkMode/DarkMode.jsx';

const Footer = () => {
    return (
        <footer className="bg-[#365486] dark:bg-[#17153B] text-white py-4 shadow-md w-full mx-auto">
          <div className="mx-auto gap-4 mt-2 text-center max-w-max h-full">
            <DarkModeToggle />
          </div>
        </footer>
      );
};

export default Footer;