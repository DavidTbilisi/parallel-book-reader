import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestApp from './TestApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
);

reportWebVitals();
