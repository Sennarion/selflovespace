import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import 'modern-normalize/modern-normalize.css';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/selflovespace">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
