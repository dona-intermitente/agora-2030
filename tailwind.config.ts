import type { Config } from 'tailwindcss'

const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: {
          DEFAULT: '#C1285D',
          '50': '#FCF2F9',
          '100': '#FAE6F3',
          '200': '#F0C0DD',
          '300': '#E69CC4',
          '400': '#D45F94',
          '500': '#C1285D',
          '600': '#AD2150',
          '700': '#91173C',
          '800': '#750F2C',
          '900': '#57081C',
          '950': '#380310'
        },
        secondary: {
          DEFAULT: '#19417F',
          '50': '#F0F7FA',
          '100': '#DFECF2',
          '200': '#B4CFE0',
          '300': '#8BB1CC',
          '400': '#4976A6',
          '500': '#19417F',
          '600': '#153973',
          '700': '#0E2A5E',
          '800': '#091E4D',
          '900': '#051438',
          '950': '#020B24'
        },
        accent: {
          DEFAULT: '#333333',
          '50': '#F5F5F5',
          '100': '#EBEBEB',
          '200': '#CCCCCC',
          '300': '#ADADAD',
          '400': '#707070',
          '500': '#333333',
          '600': '#2E2929',
          '700': '#261D1D',
          '800': '#1F1212',
          '900': '#170A0A',
          '950': '#0F0404'
        }
      }
    }
  },
  plugins: [nextui()]
}
export default config
