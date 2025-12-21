export default {
  content: ["./index.html", "./src/**/*.{js,jsx}",
     "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zen: ["'Zen Kaku Gothic Antique'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
