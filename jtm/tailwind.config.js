module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to include only files where Tailwind is needed
    "./src/pages/Services/*.jsx",
    "./src/pages/TheYellowBlogPage/*.jsx",
    "./src/pages/FullBlogPost/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', "sans-serif"]
      },
    },
  },
  plugins: [],
};
