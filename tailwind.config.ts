
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				dark: {
					50: '#0f0f0f',
					100: '#1a1a1a',
					200: '#262626',
					300: '#404040',
					400: '#525252',
					500: '#737373',
					600: '#a3a3a3',
					700: '#d4d4d4',
					800: '#e5e5e5',
					900: '#f5f5f5'
				},
				neon: {
					green: '#00ff88',
					blue: '#00d4ff',
					purple: '#a855f7'
				}
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px #00ff88'
					},
					'50%': {
						boxShadow: '0 0 20px #00ff88'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [],
} satisfies Config;
