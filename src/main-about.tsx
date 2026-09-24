import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/site.css';
import About from './pages/About';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
);
