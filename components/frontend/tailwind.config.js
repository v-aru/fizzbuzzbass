module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Add Roboto to the default sans font family
      },
      colors: {
        'custom-gray': '#f0f4f8',  // Custom color for background
      },
      boxShadow: {
        'custom-dark': '0 10px 15px -3px rgba(200, 172, 214, 0.7)', // Custom shadow with C8ACD6
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
  darkMode: 'class',
};
