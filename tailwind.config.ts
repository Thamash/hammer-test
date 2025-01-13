import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'hammer-gray': "#A08EAE",
        'purple-950': '#30273F',
        'purple-900': '#2F1255',
        'purple-800': '#3D334D',
        'purple-700': '#564B6D',
        'purple-550': '#8A38F5',
        'new-project-row': {
          DEFAULT: '#5E404B',
          even: '#75525f',
          hover: '#876166',
          border: '#E9335F',
          badge: '#E9335F'
        },
        'in-progress-project-row': {
          DEFAULT: '#3D2F63',
          even: '#49397A',
          hover: '#574687',
          border: '#8A38F5',
          badge: '#8A38F5'
        },
        'finished-project-row': {
          DEFAULT: '3D334D',
          even: '#4D405E',
          hover: '#564B6D',
          border: '#4D405E',
          badge: '#A08EAE',
          'badge-text': '#30273F'
        },
        'researcher-select-label': '#9B2BF2',
        'briefing-select-label': '#8A38F5',
        'strategy-select-label': '#7234F8',
        'presentation-select-label': '#389AF5',
      },
      fontSize: {
        'xxs': '11px',
      },
      backgroundImage: {
        'main-background': 'radial-gradient(202.78% 202.78% at 50.59% 131.78%, #010213 38.37%, #532AC5 54.05%, #DBD6EE 70.47%)',
      },
      mixBlendMode: {
        'plus-lighter': 'plus-lighter',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2.5xl': '20px',
        'sds-200': 'var(--sds-size-radius-200)',
      },
      spacing: {
        'search-input-width': '329px',
        '14px': '14px',
      },
      padding: {
        'search-input': 'var(--sds-size-space-300) var(--sds-size-space-400)',
        '15px': '15px',
        '29px': '29px',
        '31px': '31px',
      },
      margin: {
        '2.5': '10px',
        '14px': '14px',
        '21px': '21px',
      },
      height: {
        '25px': '25px',
        '16px': '16px',
        '30px': '30px',
        '45px': '45px',
        '63px': '63px',
      },
      maxHeight: {
        '589px': '589px',
      },
      width: {
        '14px': '14px',
        '17px': '17px',
        '30px': '30px',
        '44px': '44px',
        '45px': '45px',
        '100px': '100px',
        '145px': '145px',
        '150px': '150px',
        '226px': '226px',
      },
      minWidth: {
        'container': '1310px',
        'content': '1162px',
        '50px': '50px',
        '120px': '120px',
      },
      maxWidth: {
        'container': '1310px',
        'content': '1162px',
        '120px': '120px',
      },
      zIndex: {
        'super': '9999',
      }
    },
  },
  plugins: [],
} satisfies Config;
