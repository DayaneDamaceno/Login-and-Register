import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';

import GlobalStyle from './styles/global';

import { store, persistor } from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
