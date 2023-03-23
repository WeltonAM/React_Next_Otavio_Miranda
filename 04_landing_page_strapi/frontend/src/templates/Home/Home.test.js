import { renderTheme } from '../../styles/render-theme';

import Home from './Home';

describe('<Home />', () => {
    it('renders learn react link', () => {
        renderTheme(<Home />);
    });
});