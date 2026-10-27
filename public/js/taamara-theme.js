/**
 * TAAMARA CO-LIVE SPACES - Global Design System & Tailwind Theme
 * Extracted from the official reference website:
 * https://taamara-nanakramguda.preview.static.emergentagent.com
 */
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                fontFamily: {
                    sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                    serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
                    mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
                },
                colors: {
                    burgundy: {
                        700: '#3d1630',
                        800: '#2a0e21',
                        900: '#1f0a18',
                        950: '#14070f',
                    },
                    gold: {
                        300: '#f1d278',
                        400: '#e2b842',
                        500: '#c59b27',
                        600: '#a37c18',
                    },
                    cream: {
                        DEFAULT: '#faf6f0',
                        50: '#fdfbf7',
                        100: '#f7f2ea',
                        200: '#ede4d5',
                        ink: '#1a1016',
                        muted: '#6e5d68',
                    }
                }
            }
        }
    };
}
