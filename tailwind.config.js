
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: "768px",
      // => @media (min-width: 768px) { ... }
      tablet: "992px",
      // => @media (min-width: 992px) { ... }

      laptop: "1200px",
      // => @media (min-width: 1200px) { ... }

      desktop: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    borderRadius: {
      "4": "4px",
      "125": "125px",
      "full":"50%"
    },
    fontSize: {
      "12": "12px",
      "14": "14px",
      "24": "24px",
      "22": "22px",
      "16": "16px",
      "17": "17px",
      "18": "18px",
      "30": "30px",
      "40": "40px",
      "56": "56px",
    },
    extend: {
      transitionTimingFunction: {
        "btn-hover": "cubic-bezier(0.39, 0.58, 0.57, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "orange-100": "#ff4904",
        "white-100": "#fff",
        "black-100": "#10101a",
        "black-200": "#0b0b13",
        "black-300": "#141421",
        "gray-100": "#a9afc3",
        "gray-200": "#cad1e9",
        "gray-300": "#e7e5f1",
      },
      spacing: {
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "40": "40px",
        "50": "50px",
        "70": "70px",
      },
      keyframes: {
        "heading-move": {
          "0%, 100%": { transform: "translateX(-1px)" },
          "50%": { transform: "translateX(90px)" },
        },
      },
      animation: {
        "heading-move": "heading-move 10s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
