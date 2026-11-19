
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      fontSize: {
        display: ["72px", { lineHeight: "1.1" }],
        h1: ["48px", { lineHeight: "1.2" }],
        h2: ["32px", { lineHeight: "1.25" }],
        h3: ["24px", { lineHeight: "34px" }],
        "body-custom": ["16px", { lineHeight: "22px" }],
        label: ["14px", { lineHeight: "20px" }],
        caption: ["12px", { lineHeight: "17px" }],
      },

      colors: {
        principal: "#121212",
        surface: "#1E1E1E",
        raised: "#242424",
        line: "#383838",
        primary: "#CAEF69",
        primaryHover: "#DCFF8B",
        primaryActive: "#A9CE4E",
        text: "#F4F4EF",
        muted: "#A3A39D",
        error: "#FF8C8C",
      },

      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
        "5xl": "80px",
      },

      borderRadius: {
        controls: "8px",
        cards: "16px",
        pills: "999px",
      },
    },
  },
  plugins: [],
};
