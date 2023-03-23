import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primaryColor: '#0A1128',
        secondaryColor: '#dc143c',
        white: '#fff',
    },

    font: {
        family: {
            default: "'Open Sans', sans-serif",
            secondary: "'Montserrat', sans-serif",
        },

        sizes: {
            small: '2.4rem',
            medium: '3.2rem',
            large: '4.0rem',
            huge: '5.6rem',
        }
    },

    media: {
        mediumScreen: '(max-width: 768px)',
    }
}

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}