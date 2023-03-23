import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import LogoLink from './LogoLink';

describe('<LogoLink />', () => {
    it('should render text logo', () => {
        renderTheme(<LogoLink link="#target" text="Hello" />);
        expect(
            screen.getByRole('heading', { name: 'Hello' }),
        ).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Hello' })).toHaveAttribute(
            'href',
            '#target',
        );
    });

    it('should render image logo', () => {
        renderTheme(
            <LogoLink link="#target" text="Hello" srcImg="image.jpg" />,
        );
        expect(screen.getByAltText('Hello')).toHaveAttribute(
            'src',
            'image.jpg',
        );
    });

    it('should match snapshot', () => {
        const { container } = renderTheme(
            <LogoLink link="#target" text="Hello" srcImg="image.jpg" />,
        );
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot();
    });
});