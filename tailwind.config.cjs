/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
        extend: {},
    },
    fontFamily: {
        Roboto: ["Roboto, sans-serif"]
    },
    container: {
        padding: "2rem",
        center: true
    },
    screens: {
        sm: "640px",
        md: "768px"
    },
    darkMode: "class",
    plugins: [require("tw-elements/dist/plugin.cjs")]
}