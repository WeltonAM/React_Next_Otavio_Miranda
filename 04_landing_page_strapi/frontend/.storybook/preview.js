import Theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
      <GlobalStyles />
    </Theme>
  )
];