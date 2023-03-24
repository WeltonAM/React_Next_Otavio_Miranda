import Heading from './Heading';
import { renderTheme } from '../../styles/render-theme.js';
import { screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
    it('should render with default values', () => {
        renderTheme(<Heading>text</Heading>);
        const heading = screen.getByRole('heading', { name: 'text' });

        expect(heading).toHaveStyle({
            color: theme.colors.primaryColor,
            'font-size': theme.font.sizes.huge,
            'text-transform': 'none',
        });
    });

    it('should render with white color', () => {
        renderTheme(<Heading darkColor={false}>text</Heading>);
        const heading = screen.getByRole('heading', { name: 'text' });

        expect(heading).toHaveStyle({
            color: theme.colors.white,
        });
    });

    it('should render correct heading sizes', () => {
        const { rerender } = renderTheme(<Heading size="small">text</Heading>);
        const heading = screen.getByRole('heading', { name: 'text' });

        expect(heading).toHaveStyle({
            'font-size': theme.font.sizes.medium,
        });

        rerender(
            <Theme theme={theme}>
                <Heading size="big">text</Heading>
            </Theme>,
        );

        expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
            'font-size': theme.font.sizes.large,
        });

        rerender(
            <Theme theme={theme}>
                <Heading size="medium">text</Heading>
            </Theme>,
        );

        expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
            'font-size': theme.font.sizes.huge,
        });

        rerender(
            <Theme theme={theme}>
                <Heading size="medium">text</Heading>
            </Theme>,
        );
    });

    it('should render correct font-size when using mobile', () => {
        renderTheme(<Heading size="huge">text</Heading>);
        screen.getByRole('heading', { name: 'text' });

        expect(screen.getByRole('heading', { name: 'text' })).toHaveStyleRule(
            'font-size',
            theme.font.sizes.large,
            {
                media: theme.media.mediumScreen,
            },
        );
    });

    it('should render with uppercase letters', () => {
        renderTheme(<Heading upperCase={true}>text</Heading>);
        const heading = screen.getByRole('heading', { name: 'text' });

        expect(heading).toHaveStyle({
            'text-transform': 'uppercase',
        });
    });

    it('should render correct heading element', () => {
        renderTheme(<Heading as="h3">text</Heading>);
        screen.getByRole('heading', { name: 'text' });
        const h3 = screen.getByRole('h3');

        expect(h3.tagName.toLowerCase()).toBe('h3');
    });
});