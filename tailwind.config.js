module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "Inter", "sans-serif"],   // 👈 this enables font-display class
      },
      colors: {
        border: "#2a2a2a",
        primary: {
          400: "#3b82f6",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          900: "#1e3a8a",
        },
        dark: {
          50: "#f8fafc",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a", 
          950: "#020617",
        },
      },
    },
  },
  plugins: [],
};
