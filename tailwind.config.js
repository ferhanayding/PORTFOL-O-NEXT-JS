const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      colors: {
        "primary-light": "#EEEEEE",
        "primary-dark": "#041562",
        greenish: {
          100: "#03C03C",
          200: "#008000",
          300: "",
        },
        blueish: {
          100: "#e6f8f9",
          200: "#b1e8ed",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#b1e8ed",
              "&:hover": {
                color: "#edb5f5",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),

            a: {
              color: theme("colors.purple.400"),
              "&:hover": {
                color: theme("colors.purple.300"),
              },
            },
          },
        },
      }),
    },
  },

  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};