import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        border: "#C7E7F5", // Light Blue Background
        input: "#FFFFFF", // White for input backgrounds
        ring: "#236B77", // Dark Teal for focus rings
        background: "#C7E7F5", // Light Blue Background
        foreground: "#1A578C", // Dark Blue Text (Title)
        primary: {
          DEFAULT: "#236B77", // Dark Teal
          foreground: "#FFFFFF", // White for primary text
        },
        secondary: {
          DEFAULT: "#ED4B4B", // Red/Coral Emergency Icon Color
          foreground: "#FFFFFF", // White for secondary text
        },
        accent: {
          DEFAULT: "#FFD6E8", // Light Pink
          foreground: "#333333", // Black for accent text
        },
        destructive: {
          DEFAULT: "#ED4B4B", // Red/Coral for destructive actions
          foreground: "#FFFFFF", // White for destructive text
        },
        muted: {
          DEFAULT: "#FFFACD", // Light Yellow
          foreground: "#333333", // Black for muted text
        },
        popover: {
          DEFAULT: "#FFFFFF", // White for popovers
          foreground: "#333333", // Black for popover text
        },
        card: {
          DEFAULT: "#FFD6E8", // Light Pink for cards
          foreground: "#1A578C", // Dark Blue for card text
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
