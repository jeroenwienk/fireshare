import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';

import initFirebase from './initFirebase';
import initDatabase from './initDatabase';
import createStore from './createStore';
import authentication from './authentication';
import Root from './Root';

const rootElement = document.getElementById('root');
const store = createStore();

initFirebase();
initDatabase();

authentication.setStore(store);
authentication.setListener();

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  rootElement
);
