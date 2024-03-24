/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fffeff",
          "200": "#171a1f",
        },
        goldenrod: "#f2c263",
        gainsboro: "#dee1e6",
        royalblue: "#0c76ff",
        lightskyblue: "#87bffe",
        silver: {
          "100": "#bcc1ca",
          "200": "#c0c0c0",
        },
        lightslategray: "#9095a0",
        indianred: "#e05858",
        firebrick: "#c73d3d",
        limegreen: {
          "100": "#1dd75b",
          "200": "#03bd42",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        epilogue: "Epilogue",
      },
      borderRadius: {
        "mini-8": "14.8px",
        "89xl": "108px",
        "mini-1": "14.1px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "7xl": "26px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
