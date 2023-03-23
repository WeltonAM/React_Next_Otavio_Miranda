import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import Home from './Home';

test('renders learn react link', () => {
    renderTheme(<Home />);
})