import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
// import { Home } from './templates/Home/Home';
import { HomeHooks } from './templates/Home/HomeHooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeHooks />
  </React.StrictMode>
);
