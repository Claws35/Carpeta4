export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Agrega tu fuente personalizada
        neworder: ['"new-order"', "sans-serif"],
      },
      colors: {
        // Colores personalizados para usar como bg-primary, text-primary, etc.
        primary: {
          light: "#f08032", // Modo claro
          dark: "#f08032", // Modo oscuro
        },
        secondary: {
          light: "#e63946", // Modo claro
          dark: "#e63946", // Modo oscuro
        },
        background: {
          light: "#f1dfbd",
          dark: "#1d1d1d",
        },
        text: {
          light: "#1d1d1d",
          dark: "#f6f2e6",
        },
        orange: "#f08032",
        yellow: "#f1ae3f",
        blue: "#316998",
        red: "#e63946",
        beige: "#f1dfbd",
      },
    },
  },
  plugins: [
    // ...
  ],
};
