import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
      },
      colors: {
        ifce: {
          "primary": "#116005",
          "secondary": "#178214", 
          "tertiary": "#217819",
          "dark": "#062601",
        },
        slate: {
          400: "#94a3b8",
          500: "#64748b", 
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563", 
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
export default config
