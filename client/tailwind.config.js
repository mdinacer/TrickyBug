module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Oswald: ["'Oswald'", "sans-serif"],
      Montserrat: ["'Montserrat'", "sans-serif"],
      Spartan: ["'Spartan'", "sans-serif"],
      Island: ["'Island Moments'", "sans-serif"],
      CinzelDeco: ["'Cinzel Decorative'", "sans-serif"],
    },
    animation: {
      "spin-slow": "spin 2s linear infinite",
      "spin-normal": "spin 1.5s linear infinite",
      "spin-slow-reverse": "spin 1.75s linear reverse infinite",
    },
  },
  plugins: [],
};
