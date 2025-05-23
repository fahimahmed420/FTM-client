export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        lightcustom: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#3b82f6",
          secondary: "#ec4899",
          accent: "#10b981",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          "base-content": "#1f2937",
          info: "#2563eb",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      "dark",
    ],
  },
};
