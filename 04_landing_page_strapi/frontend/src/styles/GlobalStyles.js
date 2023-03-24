import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: ${(props) => props.theme.font.family.default};
        font-size: 1.6rem;
    }

    h1 {
        font-weight: 900;
    }
    
    h1, h2, h3 {
        font-family: ${(props) => props.theme.font.family.secondary};
        margin: ${({ theme }) => theme.spacings.large} 0;
    }

    p {
        margin: ${({ theme }) => theme.spacings.medium} 0;
    }

    ul, ol {
        margin: ${({ theme }) => theme.spacings.medium};
        padding: ${({ theme }) => theme.spacings.medium};
    }

    a {
        color: ${({ theme }) => theme.colors.secondaryColor};
    }
`;

export default GlobalStyles;