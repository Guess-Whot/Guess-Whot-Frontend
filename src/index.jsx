import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { SinglePageProvider } from './context/SinglePageContext';

render(
  <React.StrictMode>
    <AuthProvider>
      <SinglePageProvider>
        <App />
      </SinglePageProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
