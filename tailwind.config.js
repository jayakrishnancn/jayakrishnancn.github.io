module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Merriweather", "Georgia", "serif"],
      "sans-serif": ["montserrat", "sans-serif"],
    },
    extend: {
      textColor: ["visited"],
    },

    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
    translate: ["active", "group-hover", "hover"],
  },
  plugins: [require("flowbite/plugin")],
  purge: {
    content: [
      "./public/**/*.html",
      "./src/**/*.tsx",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./src/**/*.ts",
      "./node_modules/flowbite/**/*.js",
    ],
    safelist: [
      "group-hover:text-blue-400",
      "text-blue-400",
      "group-hover:text-blue-500",
      "text-blue-500",
      "group-hover:text-blue-700",
      "text-blue-700",
      "group-hover:text-blue-800",
      "text-blue-800",
      "group-hover:text-blue-900",
      "text-blue-900",
      "group-hover:text-gray-800",
      "text-gray-800",
      "group-hover:text-green-500",
      "text-green-500",
      "group-hover:text-green-900",
      "text-green-900",
      "group-hover:text-pink-600",
      "text-pink-600",
      "group-hover:text-purple-500",
      "text-purple-500",
      "group-hover:text-purple-700",
      "text-purple-700",
      "group-hover:text-purple-900",
      "text-purple-900",
      "group-hover:text-red-700",
      "text-red-700",
      "group-hover:text-yellow-500",
      "text-yellow-500",
      "group-hover:text-yellow-700",
      "text-yellow-700",
    ],
  },
}
