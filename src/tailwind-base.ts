import type { Config } from 'tailwindcss'
import pluginA from 'tailwindcss-react-aria-components'
import pluginB from 'tailwindcss-animate'

const tailwindBase: Config = {
    content: ["./dist/*.{js,jsx}"],
    theme: {
        colors: {
            blue: {
                light: '#85d7ff',
                DEFAULT: '#1fb6ff',
                dark: '#009eeb',
            },
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
    },
    plugins: [
        pluginA,
        pluginB
    ],
}
export default tailwindBase
