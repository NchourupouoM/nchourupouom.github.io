/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#030710',
        surface: '#0F172A',
        langchain: {
          blue: '#7FC8FF',
          emerald: '#2DD4BF',
          forest: '#1C3C3C',
          deep: '#0F2942',
        },
        slate: {
          100: '#F1F5F9',
          400: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'langgraph-dots': 'radial-gradient(#1e293b 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-grid': '24px 24px',
      }
    },
  },
  plugins: [],
};

