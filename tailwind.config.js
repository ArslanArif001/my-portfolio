module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        teal: '#64FFDA',
        ink: '#0B1220',
        mist: '#F8F9FB',
        slate: {
          850: '#0e1a2b'
        }
      },
      boxShadow: {
        'glow': '0 10px 30px -10px rgba(100,255,218,0.35)',
        'glow-lg': '0 20px 60px -20px rgba(100,255,218,0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

