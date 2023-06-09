/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "f-red": "#e10600",
        "f-dark-blue": "#15151e",
        "f-gray": "#38383f",
        "f-light-gray": "#7d7d81",
        "f-lighter-gray": "#ededed",
        "f-offwhite": "#faf9f6",
        "f-dark-red": "#6a0300",
      },

      fontFamily: {
        titillium: "Titillium Web, Arial, Helvetica, sans-serif",
        poppins: "Poppins, sans-serif",
      },

      backgroundImage: {
        road: "url('/backgrounds/photo-1571826856387-b633b9ebd93d.avif')",
        shimmer:
          "linear-gradient(90deg, #ffffff00 0%, #ffffff25 25%, #ffffff25 50%, #ffffff00)",
      },

      animation: {
        "fade-in": "fade-in 0.3s ease",
        shimmer: "shimmer 1.5s infinite",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
