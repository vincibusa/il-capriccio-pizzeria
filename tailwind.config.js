import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Colori aggiornati basati sul logo
        "pizza-gold": "#C9A227",
        "pizza-gold-dark": "#B08A1A",
        "pizza-black": "#121212",
        "pizza-background": "#FCFAF5",
        "pizza-white": "#FFFFFF",
        "pizza-gray": "#757575",
        
        // Manteniamo questi per retrocompatibilità
        "pizza-red": "#C9A227",
        "pizza-red-dark": "#B08A1A",
        "pizza-yellow": "#C9A227",
        "pizza-brown": "#121212",
        "pizza-green": "#2E7D32",
        
        // Palette UI
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        heading: {
          DEFAULT: "#121212",
        }
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        // Personalizzati
        'menu': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'hover': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.pizza-gold'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: {
              fontFamily: 'Playfair Display',
              color: theme('colors.pizza-black'),
            },
            h2: {
              fontFamily: 'Playfair Display',
              color: theme('colors.pizza-black'),
            },
            h3: {
              fontFamily: 'Playfair Display',
              color: theme('colors.pizza-black'),
            },
            h4: {
              fontFamily: 'Playfair Display',
              color: theme('colors.pizza-black'),
            }
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '1px 1px 3px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 4px 7px rgba(0, 0, 0, 0.3)',
        },
      })
    }),
  ],
};