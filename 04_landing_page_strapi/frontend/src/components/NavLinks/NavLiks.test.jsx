import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import NavLinks from './NavLiks';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
    it('should render links', () => {
        renderTheme(<NavLinks links={mock} />);
        expect(screen.getAllByRole('link')).toHaveLength(mock.length);
    });

    it('should not render links', () => {
        renderTheme(<NavLinks />);
        expect(screen.queryAllByText(/links/i)).toHaveLength(0);
    });

    it('should render mock links', () => {
        renderTheme(<NavLinks links={mock} />);
        // eslint-disable-next-line testing-library/no-node-access
        expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
            'flex-flow',
            'column wrap',
            {
                media: theme.media.mediumScreen,
            },
        );
    });

    it('should match snapshot', () => {
        const { container } = renderTheme(<NavLinks links={mock} />);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot();
    });
});