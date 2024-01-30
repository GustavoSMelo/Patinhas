import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    borderWidth: {
        DEFAULT: '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',
        '32': '32px',
        '36': '36px',
        '42': '42px'
    },
    animation: {
        'home-slide': 'home-slide 16s infinite'
    },
    keyframes: {
        'home-slide': {
            '0%': {
                transform: 'translateX(0%)'
            },
            '10%': {
                transform: 'translateX(-25%)'
            },
            '25%': {
                transform: 'translateX(-50%)'
            },

            '35%': {
                transform: 'translateX(-75%)'
            },
            '50%': {
                transform: 'translateX(-100%)'
            },
            '60%': {
                transform: 'translateX(-75%)'
            },
            '75%': {
                transform: 'translateX(-50%)'
            },
            '85%': {
                transform: 'translateX(-25%)'
            },
            '100%': {
                transform: 'translateX(0%)'
            }
        }
    },
    fontFamily: {
        'breeSerif': ['BreeSerif', 'sans-serif'],
    }
  },
  plugins: [],
}
export default config
