import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { FavoritesContextProvider } from './store/favorites-context';

// Create the root of the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with the FavoritesContextProvider wrapping BrowserRouter and App
root.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
);
