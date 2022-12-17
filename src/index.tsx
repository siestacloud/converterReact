import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import {WalletProvider} from './hooks/wallets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
  <WalletProvider>
    <App />
  </WalletProvider>
</BrowserRouter>
);

