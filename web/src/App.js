import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import './config/ReactotronConfig';
import Routes from './routes';

import GlobalStyle from './styles/global';

import { store, persistor } from './store';
import history from './services/history';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <AnimatePresence exitBeforeEnter>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </AnimatePresence>
        </Router>
      </PersistGate>
    </Provider>
  );
}
