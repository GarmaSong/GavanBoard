import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SampleProvider } from './contexts/Sample';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SampleProvider>
        <GlobalStyles />
        <App />
      </SampleProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
