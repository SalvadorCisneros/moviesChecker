import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SearchProvider } from './components/alt/searchContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SearchProvider>
    <App />
  </SearchProvider>
</React.StrictMode>,
);

