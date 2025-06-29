/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        vibes: ['"Great Vibes"', "cursive"]
      },
      colors: {
        seashell: "#F2EFE7",
        barebeige: "#F7F5F0",
        mintmist: "#CFEFEF",
        mintfoam: "#9ACBD0",
        seaglass: "#48A6A7",
        deepsea: "#006A71",
      },
      keyframes: {
        dots: {
          "0%, 20%": { content: "''" },
          "40%": { content: "'.'" },
          "60%": { content: "'..'" },
          "80%, 100%": { content: "'...'" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        dots: "dots 2s steps(4, end) infinite",
        fadeIn: "fadeIn 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
