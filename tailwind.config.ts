import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                candy: {
                    pink: '#FFAAB8FF',
                    glow: '#FF4D94',
                    soft: '#FFF0F6',
                },
                warm: {
                    dark: '#2d2d2dff',
                    gray: '#242424ff',
                    brown: '#2A1B1F',
                    accent: '#3D2B2F',
                },
                gold: {
                    warm: '#e2a200ff',
                    soft: '#FFD700',
                }
            },
            fontFamily: {
                sans: ['"Iosevka Charon Mono"', 'monospace'],
                mono: ['"Iosevka Charon Mono"', 'monospace'],
            }
        }
    },
    plugins: [
        typography,
    ],
}
