/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: '#E4CFBC',
        body: '#FCF3EB',
        green: '#4F5939',
        brightPurple: '#7D7CBE',
        medPurple: '#AF81AB',
        darkPurple: '#73557D',
        vdarkPurple: '#251A45',
        lightGreen: '#C3C6BD',
      }
    },
  },
  plugins: [],
}
