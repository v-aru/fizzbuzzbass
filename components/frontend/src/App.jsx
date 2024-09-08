import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FizzBuzzBassForm from "./components/FizzBuzzBassForm/FizzBuzzBassForm.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow bg-[#DCF2F1] dark:bg-indigo-950">
        <FizzBuzzBassForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
