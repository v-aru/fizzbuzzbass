module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Add Roboto to the default sans font family
      },
      colors: {
        'custom-gray': '#f0f4f8',  // Custom color for background
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
};
