import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'
import { BrowserRouter } from 'react-router-dom';

import BaseLayout from './components/shared/layout/BaseLayout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  </React.StrictMode>,
);
