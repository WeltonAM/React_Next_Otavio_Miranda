import { ThemeProvider } from 'styled-components';

export const theme = {
    colors: {
        primaryColor: '#0A1128',
        secondaryColor: '#dc143c',
        white: '#fff',
        mediumGray: '#DDDDDD',
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
    },

    spacings: {
        xsmall: '8rem',
        small: '1.6rem',
        medium: '2.4rem',
        large: '3.2rem',
        xlarge: '4.0rem',
        xxlarge: '4.8rem',
        huge: '5.6rem',
        xhuge: '6.4rem',
    },
}

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}