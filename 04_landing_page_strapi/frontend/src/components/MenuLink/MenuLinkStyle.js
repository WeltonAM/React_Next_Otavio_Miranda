import styled from 'styled-components';

export const Container = styled.a`
    display: block;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.sizes.small};
    padding: ${({ theme }) => theme.spacings.small};
    color: ${({ theme }) => theme.colors.primaryColor};
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom:0.75rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: ${({ theme }) => theme.colors.secondaryColor};
        transition: all 300ms ease-in-out;
    }

    &:hover::after {
        left: 25%;
        width: 50%;
    }
`;
