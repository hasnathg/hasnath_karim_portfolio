export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cyberfolio: {
          "primary": "#22d3ee",
          "secondary": "#a78bfa",
          "accent": "#22d3ee",
          "neutral": "#111827",
          "base-100": "#0f172a",
          "base-200": "#0b1220",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#facc15",
          "error": "#f43f5e",
        },
      },
      "dark"
    ],
    darkTheme: "cyberfolio",
  },
}