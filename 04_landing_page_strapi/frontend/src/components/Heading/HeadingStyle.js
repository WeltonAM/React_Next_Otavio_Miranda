import styled, { css } from 'styled-components';

const titleSize = {
    small: (props) => css`
        font-size: ${props.theme.font.sizes.small};
        `,
    medium: (props) => css`
        font-size: ${props.theme.font.sizes.medium};
    `,
    large: (props) => css`
        font-size: ${props.theme.font.sizes.large};
    `,
    huge: (props) => css`
        font-size: ${props.theme.font.sizes.huge};
        ${fontMedia(props)};
    `,
};

const fontMedia = (props) => css`
    @media ${props.theme.media.mediumScreen} {
        font-size: ${props.theme.font.sizes.large};
    }
`;

const titleCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
    color: ${(props) => props.darkColor ? props.theme.colors.primaryColor : props.theme.colors.white};

    ${(props) => titleSize[props.size](props)};
    
    ${(props) => titleCase(props.upperCase)};
`;