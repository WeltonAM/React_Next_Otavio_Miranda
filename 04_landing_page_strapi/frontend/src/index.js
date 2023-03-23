import React from 'react';
import ReactDOM from 'react-dom/client';

import Theme from './styles/theme.js';
import GlobalStyles from './styles/GlobalStyles.js';

import Home from './templates/Home/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <Home />
      <GlobalStyles />
    </Theme>
  </React.StrictMode>
);