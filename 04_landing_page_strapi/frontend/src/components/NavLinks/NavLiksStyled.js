import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    flex-flow: row wrap;
    @media ${({ theme }) => theme.media.mediumScreen} {
        flex-flow: column wrap;
        align-content: center;
    }
`;