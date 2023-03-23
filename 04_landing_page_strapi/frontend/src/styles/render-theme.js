import { render } from '@testing-library/react';
import Theme from './theme';


export const renderTheme = ({ children }) => {
    return render(
        <Theme>{children}</Theme>
    )
}