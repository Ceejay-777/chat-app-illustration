/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        paleViolet: "hsl(276, 100%, 81%)",
        moderateViolet: "hsl(276, 55%, 52%)",
        desaturatedDarkViolet: "hsl(271, 15%, 43%)",
        grayishBlue: "hsl(206, 6%, 79%)",
        veryDarkDesaturatedViolet: "hsl(271, 36%, 24%)",
        darkGrayishViolet: "hsl(270, 7%, 64%)",
        lightGrayishViolet: "hsl(270, 20%, 96%)",
        veryLightMagenta: "hsl(289, 100%, 72%)",
        lightMagenta: "hsl(293, 100%, 63%)",
        lightViolet: "hsl(264, 100%, 61%)",
      },
      borderRadius: {
        mobile: "0% 0% 100% 0% / 0% 0% 35% 0% ",
        desktop: "0% 0% 60% 40% / 0% 0% 35% 16%  ",
      },
      screens: {
        md: "1060px",
      },
    },
  },
  plugins: [],
};
